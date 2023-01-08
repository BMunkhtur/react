import Cardt from "./Card";
const Carbuttontwo = () => {
  const cards = [
    {
      ner: "cardu",
      name: "Canon camera",
      imageURL: "./zurag/camer.png",
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
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <Cardt key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Carbuttontwo;
