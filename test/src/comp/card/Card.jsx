import Carditem from "./Carditem";
const Card = (users) => {
  return (
    <div className="d-flex flex-wrap gap-5">
      {users.users.map((user) => (
        <Carditem user={user} />
      ))}
    </div>
  );
};
export default Card;
