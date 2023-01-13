import Cardtwo from "./Cardtwo";
const Carouselthree = () => {
  const cards = [
    {
      name: "Camera",
      imageURL: "./zurag/5.png",
      price: "$11.7",
    },
    {
      name: "Wireless headphones",
      imageURL: "./zurag/5.png",
      price: "$11.7",
    },
    {
      name: "Wireless headphones",
      imageURL: "./zurag/5.png",
      price: "$11.7",
    },
    {
      name: "Play game",
      imageURL: "./zurag/5.png",
      price: "$11.7",
    },
    {
      name: "Tablet as a laptop",
      imageURL: "./zurag/5.png",
      price: "$11.7",
    },
    {
      name: "Wireless headphones",
      imageURL: "./zurag/5.png",
      price: "$11.7",
    },
    {
      name: "Tablet as a laptop",
      imageURL: "./zurag/5.png",
      price: "$11.7",
    },
    {
      name: "Play game",
      imageURL: "./zurag/5.png",
      price: "$11.7",
    },
  ];
  return (
    <div className="container">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active  one m-2"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="one m-2"
          ></button>
          <button
            type="button"
            className="one m-2"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active m-5" data-bs-interval="10000">
            <div className="cartt row">
              {cards.map((cardtwo, index) => (
                <Cardtwo key={index} cardtwo={cardtwo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carouselthree;
