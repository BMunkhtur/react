import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Carditem(props) {
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.user.profileImg} />
        <Card.Body>
          <Card.Title>{props.user.first}</Card.Title>
          <Card.Text>{props.user.address}</Card.Text>
          <Button variant="">{props.user.created}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Carditem;
