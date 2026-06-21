import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Delivery from "../Delivery/Delivery";
import Description from "../Description/Description";
import MiddleHero from "../MiddleHero/MiddleHero";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="space-y-5 mt-5">
      <Banner></Banner>
      <Description></Description>
      <Services></Services>
      <Brands></Brands>
      <Delivery></Delivery>
      <MiddleHero></MiddleHero>
      <Reviews reviewPromise={reviewPromise}></Reviews>
    </div>
  );
};

export default Home;
