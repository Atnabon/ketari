// import Swiper core and required modules
import { Autoplay, Pagination, Navigation, A11y } from "swiper";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const reviews = [
    {
      _id: 1,
      comment: "The talent recruitment service provided by this platform has been exceptional. They take the time to understand our specific requirements and always present us with well-qualified candidates. We highly recommend their services.",
      name: "Yonas",
      position: "HR Manager",
      img: "bitmap@2x.png",
    },
    {
      _id: 2,
      comment: "The talent recruitment service provided by this platform has been exceptional. They take the time to understand our specific requirements and always present us with well-qualified candidates. We highly recommend their services.",
      name: "Sarah",
      position: "Recruitment Lead",
      img: "sarah.png",
    },
    {
      _id: 3,
      comment: "The talent recruitment service provided by this platform has been exceptional. They take the time to understand our specific requirements and always present us with well-qualified candidates. We highly recommend their services.",
      name: "John",
      position: "Director of Human Resources",
      img: "bitmap@2x.png",
    },
    {
      _id: 4,
      comment: "The talent recruitment service provided by this platform has been exceptional. They take the time to understand our specific requirements and always present us with well-qualified candidates. We highly recommend their services.",
      name: "Mark",
      position: "Senior Recruitment Specialist",
      img: "bitmap@2x.png",
    },
    {
      _id: 5,
      comment: "The talent recruitment service provided by this platform has been exceptional. They take the time to understand our specific requirements and always present us with well-qualified candidates. We highly recommend their services.",
      name: "Sarah",
      position: " HR Manager",
      img: "sarah.png",
    },
    {
      _id: 6,
      comment: "The talent recruitment service provided by this platform has been exceptional. They take the time to understand our specific requirements and always present us with well-qualified candidates. We highly recommend their services.",
      name: "Yonas",
      position: "HR Manager",
      img: "bitmap@2x.png",
    },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="card rounded-none bg-[#f2f5fb] shadow-xl">
            <figure className="pt-5">
              <img src={review.img} alt="Shoes" className="rounded-xl h-24" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{review.name}</h2>
              <p>{review.position}</p>
              <p>{review.comment}</p>
              <div className="card-actions">
                <div className="flex text-[gold]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Review;
