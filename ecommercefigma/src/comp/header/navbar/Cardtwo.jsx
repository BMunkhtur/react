const Cardtwo = ({ cardtwo }) => {
  return (
    <div className="card cartone p-2 m-3">
      <img src={`${cardtwo.imageURL}`} alt="" />
      <i class="bi bi-heart cardmatwo"></i>
      <h5 className="conttitle">{cardtwo.name}</h5>
      <p className="car">{cardtwo.price}</p>
      <i class="bi bi-cart2 cardmaone"></i>
    </div>
  );
};
export default Cardtwo;
