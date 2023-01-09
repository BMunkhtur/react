import Button from "react-bootstrap/Button";

import Cardt from "./Card";
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
  ];

  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide col"
      data-bs-ride="true"
    >
      <div class="carousel-inner containerone">
        <div class="carousel-item active">
          <div className="row">
            {cards.map((card, index) => (
              <Cardt key={index} card={card} />
            ))}
          </div>
        </div>
        <div class="carousel-item">
          <div className="row">
            {cards.map((card, index) => (
              <Cardt key={index} card={card} />
            ))}
          </div>
        </div>
        <div class="carousel-item">
          <div className="row">
            {cards.map((card, index) => (
              <Cardt key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev left"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <button className="leftbut">
          <i class="bi bi-arrow-left"></i>
        </button>
        <span class="carousel-control" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next right"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <button className="rightbut">
          <i class="bi bi-arrow-right"></i>
        </button>

        <span class="carousel-control " aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carbuttontwo;
