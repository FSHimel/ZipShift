import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ reviewData }) => {
  const {userName, user_photoURL, review, position} = reviewData;

  return (
    <div className="card w-full bg-base-100 shadow-lg rounded-3xl my-2">
      <div className="card-body p-5 sm:p-6 md:p-8">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl sm:text-4xl md:text-5xl text-primary opacity-30" />

        {/* Testimonial Text */}
        <p className="text-sm sm:text-base text-base-content/80 leading-6 sm:leading-7 mt-2">
          {review}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-secondary/40 my-4 sm:my-5"></div>

        {/* Author */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="avatar">
            <img src={user_photoURL} alt="user_photoURL" className="w-10 sm:w-12 md:w-14 rounded-full"/>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg text-secondary">
              {userName}
            </h3>

            <p className="text-xs sm:text-sm text-base-content/60">
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
