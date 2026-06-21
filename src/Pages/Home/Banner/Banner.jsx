import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { Link } from "react-router";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute bottom-4 md:bottom-10 left-5 md:left-18 flex items-center gap-5">
          <div className="flex items-center">
            <Link className="btn bg-primary text-secondary font-bold text-[14px] md:text-xl py-3 md:py-5 px-5 md:px-8 rounded-3xl ">
              Track Your Parcel
            </Link>
            <div className="bg-secondary p-3 rounded-[50%]">
              <GoArrowUpRight className="text-primary font-black"></GoArrowUpRight>
            </div>
          </div>
          <Link className="btn text-secondary font-bold text-[14px] md:text-xl py-3 md:py-5 px-5 md:px-8 rounded-[10px]">
            Be A Rider
          </Link>
        </div>
      </div>
      <div>
        <img src={bannerImg2} />
        <div className="absolute bottom-4 md:bottom-10 left-5 md:left-18 flex items-center gap-5">
          <div className="flex items-center">
            <Link className="btn bg-primary text-secondary font-bold text-[14px] md:text-xl py-3 md:py-5 px-5 md:px-8 rounded-3xl ">
              Track Your Parcel
            </Link>
            <div className="bg-secondary p-3 rounded-[50%]">
              <GoArrowUpRight className="text-primary font-black"></GoArrowUpRight>
            </div>
          </div>
          <Link className="btn text-secondary font-bold text-[14px] md:text-xl py-3 md:py-5 px-5 md:px-8 rounded-[10px]">
            Be A Rider
          </Link>
        </div>
      </div>
      <div>
        <img src={bannerImg3} />
        <div className="absolute bottom-4 md:bottom-10 left-5 md:left-18 flex items-center gap-5">
          <div className="flex items-center">
            <Link className="btn bg-primary text-secondary font-bold text-[14px] md:text-xl py-3 md:py-5 px-5 md:px-8 rounded-3xl ">
              Track Your Parcel
            </Link>
            <div className="bg-secondary p-3 rounded-[50%]">
              <GoArrowUpRight className="text-primary font-black"></GoArrowUpRight>
            </div>
          </div>
          <Link className="btn text-secondary font-bold text-[14px] md:text-xl py-3 md:py-5 px-5 md:px-8 rounded-[10px]">
            Be A Rider
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
