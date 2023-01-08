import Cardtwo from "./Cardtwo";
const Carouselthree = () => {
  const cards = [
    {
      name: "Cameras",
    },
  ];
  return (
    <div className="container d-flex">
      {cards.map((cardtwo, index) => (
        <Cardtwo key={index} cardtwo={cardtwo} />
      ))}
    </div>
  );
};

export default Carouselthree;
