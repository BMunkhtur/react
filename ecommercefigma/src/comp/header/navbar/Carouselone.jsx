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
    <div className="container ">
      <div className="navbarbuttongreed d-flex">
        <h2 className="doo ms-4">Popular products</h2>
        {cards.map((card, index) => (
          <Cardone key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Carbuttonone;
