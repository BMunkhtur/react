import "../../comp/header/navbar/list/style.css";
const Detailtext = () => {
  const Detailtexth = [
    {
      id: "detailh1",
      ner: "BLOG DETAILS H1",
      texttwo:
        "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.",
      textone:
        "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      textthree:
        "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
    },
    {
      id: "detailh2",
      ner: "BLOG DETAILS H2",
      texttwo:
        "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.",
      textone:
        "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      textthree:
        "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
    },
    {
      id: "detailh3",
      ner: "BLOG DETAILS H3",
      texttwo:
        "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.",
      textone:
        "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      textthree:
        "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
    },
  ];
  return (
    <div className="container">
      <div>
        <img className="detailpic" src="../zurag/Rectangle 124.png" alt="" />
      </div>
      {Detailtexth.map((Detailtexth, index) => (
        <div key={index}>
          <h3 id={Detailtexth.id}>{Detailtexth.ner}</h3>
          <p className="textone">{Detailtexth.textone}</p>
          <p className="texttwo">{Detailtexth.texttwo}</p>
          <p className="textthree">{Detailtexth.textthree}</p>
        </div>
      ))}
    </div>
  );
};
export default Detailtext;
