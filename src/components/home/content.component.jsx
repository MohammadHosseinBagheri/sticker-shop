import { Row } from "react-bootstrap";
import { useCategoryState } from "../../context/category/provider";
import SwiperTitle from "./swipertitle.component";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MySwiper from "./swiper.component";
import StickerContainer from "./stickers-container.component";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);
const HomeContent = () => {
  const category = useCategoryState();
  return (
    <>
      <Row>
        <SwiperTitle />
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
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
