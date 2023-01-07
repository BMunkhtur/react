import "./style.css";
const List = () => {
  return (
    <div className="List">
      <div className="container">
        <ul className="lists">
          <li className="flex-one">
            <img className="zurag1" src="./zurag/Logo.png" alt="" />
            <img className="zurag" src="./zurag/Hire Me.png" alt="" />
          </li>
          <a href="">
            {" "}
            <li>PORTFOLIO</li>
          </a>
          <a href="">
            <li>BLOG</li>
          </a>
          <a href="">
            <li>CV</li>
          </a>
          <a href="">
            {" "}
            <li>STORE</li>
          </a>
          <a href="">
            {" "}
            <li>FREELANCE</li>
          </a>
          <a href="">
            <li>ABOUT ME</li>
          </a>
          <a href="">
            {" "}
            <li>CONTACT</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default List;
