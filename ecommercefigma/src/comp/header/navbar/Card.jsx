const Cardt = ({ card }) => {
  return (
    <div className="cardfour border col me-5">
      <div className="row">
        <div className="col">
          <img src={`${card.imageURL}`} alt="" />
        </div>
        <div className="col">
          <h3 className="conttitle">{card.name}</h3>
          <p className="car">{card.count}</p>
        </div>
      </div>
    </div>
  );
};
export default Cardt;
