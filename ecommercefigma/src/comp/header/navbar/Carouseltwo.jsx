import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Cardt from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlideNextButton from "./Nextslide";
const Carbuttontwo = () => {
  const cards = [
    {
      ner: "cardu",
      name: "Canon camera",
      imageURL: "./zurag/2.png",
      count: "(item 5)",
    },
    {
      ner: "cardu",
      name: "Desktop & laptop",
      imageURL: "./zurag/2.png",
      count: "(item 6)",
    },
    {
      ner: "cardu",
      name: "DSLR camera",
      imageURL: "./zurag/5.png",
      count: "(item 6)",
    },
    {
      ner: "cardu",
      name: "Canon camera",
      imageURL: "./zurag/2.png",
      count: "(item 5)",
    },
    {
      ner: "cardu",
      name: "Desktop & laptop",
      imageURL: "./zurag/2.png",
      count: "(item 6)",
    },
    {
      ner: "cardu",
      name: "DSLR camera",
      imageURL: "./zurag/5.png",
      count: "(item 6)",
    },
  ];
  return (
    <div className="container ">
      <img className="arrowleft" src="./zurag/arrow-left.png" alt="" />

      <Swiper
        className="swiper ms-4"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        onSlideChange={() => console.log("slide change")}
      >
        {cards.map((card, index) => (
          <SwiperSlide>
            <Cardt card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <img className="arrowrigth" src="./zurag/arrow1.png" alt="" />
    </div>
  );
};
export default Carbuttontwo;
