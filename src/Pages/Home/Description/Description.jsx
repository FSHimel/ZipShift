import bookingIconIMG from "../../../assets/bookingIcon.png";
const Description = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-3 p-10">
      <h1 className="text-2xl font-bold">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        <div>
          <img src={bookingIconIMG} alt="delivery Icon" />
          <h3 className="font-semibold">Booking Pick & Drop</h3>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div>
          <img src={bookingIconIMG} alt="delivery Icon" />
          <h3 className="font-semibold">Cash On Delivery</h3>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div>
          <img src={bookingIconIMG} alt="delivery Icon" />
          <h3 className="font-semibold">Delivery Hub</h3>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div>
          <img src={bookingIconIMG} alt="delivery Icon" />
          <h3 className="font-semibold">Booking SME & Corporate</h3>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
