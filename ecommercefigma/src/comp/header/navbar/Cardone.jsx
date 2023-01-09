const Cardone = ({ card }) => {
  return (
    <div className="row p-3 ">
      <button className="navbarbutton">{card.name}</button>
    </div>
  );
};
export default Cardone;
