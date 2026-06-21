import location from "../../../assets/location-merchant.png";
import waveIllustration from "../../../assets/be-a-merchant-bg.png";

const MiddleHero = () => {
  return (
    <section className="bg-[#003B43] rounded-4xl overflow-hidden relative m-8 my-10">
         <img
    src={waveIllustration}
    alt=""
    className="absolute top-0 left-0 w-full pointer-events-none"
  />
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full h-24 opacity-30">
        <div className="w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent blur-xl"></div>
      </div>

      <div className="hero min-h-95">
        <div className="hero-content flex-col lg:flex-row justify-between w-full px-8 lg:px-16 py-16">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h1>

            <p className="py-6 text-gray-300 leading-8">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn rounded-full bg-lime-400 border-none text-black hover:bg-lime-300 px-8">
                Become a Merchant
              </button>

              <button className="btn btn-outline rounded-full border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-8">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <img src={location} alt="location" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleHero;
