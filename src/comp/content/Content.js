import "../header/navbar/list/style.css"
import Cardt from "./card/Card";
const Content = () => {
  const cards = [{ner:"cardu", name:'This way is wrong about Ul Design', text:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users the challenging steps from learning about your podcast on the web" ,imageURL:"./zurag/Rectangle 124 (1).png", link:"READ MORE", date:"NOV 23 2020"},
    { ner:"cardu",name:'This way is wrong about Ul Design', text:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users the challenging steps from learning about your podcast on the web", imageURL:"./zurag/Rectangle 124.png", link:"READ MORE", date:"NOV 23 2020" },
    {ner:"cardu",name:'This way is wrong about Ul Design', text:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users the challenging steps from learning about your podcast on the web" ,imageURL:"./zurag/Rectangle 124 (1).png", link:"READ MORE", date:"NOV 23 2020"},
    {ner:"cardu",name:'This way is wrong about Ul Design', text:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users the challenging steps from learning about your podcast on the web" ,imageURL:"./zurag/Rectangle 124 (1).png", link:"READ MORE", date:"NOV 23 2020"},
    {ner:"cardu", name:'This way is wrong about Ul Design', text:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users the challenging steps from learning about your podcast on the web", imageURL:"./zurag/Rectangle 124.png" , link:"READ MORE", date:"NOV 23 2020"},
    {ner:"cardu", name:'This way is wrong about Ul Design', text:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users the challenging steps from learning about your podcast on the web", imageURL:"./zurag/Rectangle 124.png", link:"READ MORE" , date:"NOV 23 2020"},
]
    return (
      <div className="List">
        <div className="container">
       <ul className="contentlist">
        <li>ALL</li>
        <li>UL DESIGN</li>
        <li>UX DESIGN</li>
        <li>PRODUCT DESIGN</li>
        <li>ARTICLES</li>
        <li>TUTORIALS</li>
        <li>NEWS</li>
       </ul>
      <div className="card">
        {cards.map((card,index)=>
            <Cardt key={index}card={card}/>)}
      </div>
       </div>
      </div>
    )
  }
  export default Content;