const Navbar = () => {
  return (
    <div className="wall p-3 container">
      <div className="headerone row d-flex  ">
        <div className="me-auto p-2 col">
          <p className="">Need help? Call us: (+98) 0234 456 789</p>
        </div>
        <div className="col d-flex p-2 first">
          <p className="me-5">
            <img className="me-3" src="./zurag/location.png" alt="" />
            Our store
          </p>
          <p>
            <img className="me-3" src="./zurag/group.png" alt="" />
            Track your order
          </p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
