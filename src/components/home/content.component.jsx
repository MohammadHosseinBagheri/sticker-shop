import { Row } from "react-bootstrap";
import { useCategoryState } from "../../context/category/provider";
import SwiperTitle from "./swipertitle.component";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MySwiper from "./swiper.component";
import StickerContainer from "./stickers-container.component";
import styles from "./home.module.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade,Autoplay]);
const HomeContent = () => {
  const category = useCategoryState();
  // console.log("content render", "color:red;");
  return (
    <>
      <Row>
        <SwiperTitle />
        <Swiper
          paginationStyle={{ bottom: 15 }}
          pagination={{ clickable: true }}
          className={styles.swiper_container}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          dynamicBullets={true}
          parallax
          autoplay={true}
          speed={500}
        >
          {category
            ? category
                .filter((_, i) => i < 6)
                .map((item, index) => (
                  <SwiperSlide>
                    <MySwiper item={item} index={index} />
                  </SwiperSlide>
                ))
            : null}
        </Swiper>
      </Row>
      <StickerContainer />
    </>
  );
};

export default HomeContent;
