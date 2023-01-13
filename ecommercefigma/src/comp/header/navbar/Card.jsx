const Cardt = ({ card }) => {
  return (
    <div className=" col card  me-5 otgoo">
      <div className="row">
        <div className="row w-50">
          <img src={`${card.imageURL}`} alt="" className="w-100" />
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
