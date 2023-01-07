import "../navbar/list/style.css";
import DesignBtn from "./design/Design";
const Headermain = () => {
  const designs = [
    { name: "TWITTER", imageURL: "./zurag/twitter.png" },
    { name: "LINKINDEN", imageURL: "./zurag/linked_in.png" },
    { name: "MEDIUM", imageURL: "./zurag/medium.png" },
  ];
  return (
    <div className="Headermain">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="h1">Blog Posts</h1>
            <h1 className="toph1">I think so, this is it.</h1>
            <p className="pmargin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus voluptatem aut quibusdam, labore sequi recusandae
              facere! Consequuntur facilis veniam magnam quos sed error
              accusantium minus numquam ipsum, omnis, nisi corporis quidem
              exercitationem in esse iure. Dolore magnam quas delectus aut.
            </p>
            <div className="btns">
              {designs.map((design, index) => (
                <DesignBtn key={index} design={design} />
              ))}
            </div>
          </div>
          <div className="col">
            <img src="./zurag/Group 296.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Headermain;
