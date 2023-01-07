const Cardt = ({ card }) => {
  return (
    <div id={`${card.ner}`} className="cardt">
      <img src={`${card.imageURL}`} alt="" />
      <div className="date">{card.date}</div>
      <div className="conttitle">{card.name}</div>
      <div className="conttext">{card.text}</div>
      <div className="readone">
        <a href="" className="read">
          {card.link}
        </a>
      </div>
    </div>
  );
};
export default Cardt;
