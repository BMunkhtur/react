import Cardone from "./Cardone";
const Carbuttonone = () => {
  const cards = [
    {
      name: "Cameras",
    },
    {
      name: "Laptops",
    },
    {
      name: "Tablets",
    },
    {
      name: "Mouse",
    },
  ];
  return (
    <div className="container d-flex">
      <h2 className="doo">Popular products</h2>
      {cards.map((card, index) => (
        <Cardone key={index} card={card} />
      ))}
    </div>
  );
};

export default Carbuttonone;
