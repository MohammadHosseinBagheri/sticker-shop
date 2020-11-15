import { Col, Row, Card, Button } from "react-bootstrap";
import { useCategoryState } from "../../context/category/provider";
import Image from "next/image";
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);
const HomeContent = () => {
  const category = useCategoryState();
  console.log(category);
  return (
    <Row className="d-flex justify-content-center">
      <SwiperTitle />
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        parallax
        autoplay={true}
        speed={500}
      >
        {category.artists
          ?.filter((_, i) => i < 6)
          .map((item, index) => (
            <SwiperSlide>
              <MySwiper item={item} index={index} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Row>
  );
};

export default HomeContent;
