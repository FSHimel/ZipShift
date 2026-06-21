import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <div className="mt-10 space-y-6">
      <div className="text-center">
        <h2 className="text-secondary text-xl font-bold">We've helped thousands of sales teams</h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={amazon} alt="amazon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amazon_vector} alt="amazon_vector" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} alt="casio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={moonstar} alt="moonstar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstad} alt="randstad" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} alt="star" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={start_people} alt="start_people" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
