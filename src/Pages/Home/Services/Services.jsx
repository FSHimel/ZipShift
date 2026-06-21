import serviceIMG from "../../../assets/service.png";
const Services = () => {
  return (
    <div className="bg-secondary p-10 text-white text-center rounded-2xl">
      <div className="md:w-1/2 mx-auto mb-5 ">
        <h1 className="font-bold text-3xl">Our Services</h1>
        <p className="text-[14px]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="space-y-3 bg-white text-black text-center flex flex-col items-center p-3 hover:bg-primary rounded-xl">
          <img
            src={serviceIMG}
            alt="service"
            className="bg-[#EEEDFC] p-3 rounded-[50%]"
          />
          <h2 className="text-xl font-bold text-secondary">
            Express & Standard Delivery
          </h2>
          <p className="text-[#606060] text-[14px]">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="space-y-3 bg-white text-black text-center flex flex-col items-center p-3 hover:bg-primary rounded-xl">
          <img
            src={serviceIMG}
            alt="service"
            className="bg-[#EEEDFC] p-3 rounded-[50%]"
          />
          <h2 className="text-xl font-bold text-secondary">
            Nationwide Delivery
          </h2>
          <p className="text-[#606060] text-[14px]">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="space-y-3 bg-white text-black text-center flex flex-col items-center p-3 hover:bg-primary rounded-xl">
          <img
            src={serviceIMG}
            alt="service"
            className="bg-[#EEEDFC] p-3 rounded-[50%]"
          />
          <h2 className="text-xl font-bold text-secondary">
            Fulfillment Solution
          </h2>
          <p className="text-[#606060] text-[14px]">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="space-y-3 bg-white text-black text-center flex flex-col items-center p-3 hover:bg-primary rounded-xl">
          <img
            src={serviceIMG}
            alt="service"
            className="bg-[#EEEDFC] p-3 rounded-[50%]"
          />
          <h2 className="text-xl font-bold text-secondary">
            Cash on Home Delivery
          </h2>
          <p className="text-[#606060] text-[14px]">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="space-y-3 bg-white text-black text-center flex flex-col items-center p-3 hover:bg-primary rounded-xl">
          <img
            src={serviceIMG}
            alt="service"
            className="bg-[#EEEDFC] p-3 rounded-[50%]"
          />
          <h2 className="text-xl font-bold text-secondary">
            Corporate Service / Contract In Logistics
          </h2>
          <p className="text-[#606060] text-[14px]">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="space-y-3 bg-white text-black text-center flex flex-col items-center p-3 hover:bg-primary rounded-xl">
          <img
            src={serviceIMG}
            alt="service"
            className="bg-[#EEEDFC] p-3 rounded-[50%]"
          />
          <h2 className="text-xl font-bold text-secondary">Parcel Return</h2>
          <p className="text-[#606060] text-[14px]">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
