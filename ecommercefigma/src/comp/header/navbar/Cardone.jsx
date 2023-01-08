const Cardone = ({ card }) => {
  return (
    <div className="row me-5">
      <button className="navbarbutton">{card.name}</button>
    </div>
  );
};
export default Cardone;
