import delivery from "../../../assets/safe-delivery.png";

const Delivery = () => {
  return (
    <div className="p-10 space-y-3">
      <div className="card bg-base-200 rounded-3xl">
        <div className="card-body p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Illustration */}
            <div className="shrink-0">
              <img src={delivery} alt="Live Parcel Tracking" className="w-48" />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-32 border-l border-dashed border-secondary/40"></div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Live Parcel Tracking
              </h2>

              <p className="text-base-content/70 leading-8">
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-200 rounded-3xl">
        <div className="card-body p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Illustration */}
            <div className="shrink-0">
              <img src={delivery} alt="Live Parcel Tracking" className="w-48" />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-32 border-l border-dashed border-secondary/40"></div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                100% Safe Delivery
              </h2>

              <p className="text-base-content/70 leading-8">
                We ensure your parcels are handled with the utmost care and
                delivered securely to their destination. Our reliable process
                guarantees safe and damage-free delivery every time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-200 rounded-3xl">
        <div className="card-body p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Illustration */}
            <div className="shrink-0">
              <img src={delivery} alt="Live Parcel Tracking" className="w-48" />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-32 border-l border-dashed border-secondary/40"></div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                24/7 Call Center Support
              </h2>

              <p className="text-base-content/70 leading-8">
                Our dedicated support team is available around the clock to
                assist you with any questions, updates, or delivery
                concerns—anytime you need us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
