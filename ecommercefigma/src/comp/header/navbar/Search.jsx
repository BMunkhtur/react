import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Search = () => {
  return (
    <div className="walltwo p-3 container">
      <div className="row">
        <div className="col">
          <img className="logo" src="./zurag/logo.png" alt="" />
        </div>
        <div className="col-4">
          <InputGroup className="mt-2 row">
            <input
              className="search col-8"
              placeholder="Serach any things"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            ></input>
            <Button
              variant="outline-secondary"
              className="search col-3 searchbuttom bg-warning"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </div>
        <div className="col"></div>
        <div className="col p-1">
          <div className="row">
            <div className="d-flex p-3">
              <p className="text-white me-4 wall-text">
                <img className="zurag me-2" src="./zurag/user.png" alt="" />
                <a href="">Sign in</a>
              </p>
              <p className="text-white me-4 wall-count">
                <img className="zurag" src="./zurag/heart.png" alt="" />
                <button className="count">0</button>
              </p>
              <p className="text-white wall-count">
                <img className="" src="./zurag/shopping.png" alt="" />
                <button className="count">0</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
