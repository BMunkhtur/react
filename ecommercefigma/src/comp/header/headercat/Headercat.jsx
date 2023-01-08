import Dropdown from "react-bootstrap/Dropdown";

const Headercat = () => {
  return (
    <div className="container down">
      <div className="downone">
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Browse categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <ul className="list">
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Home
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Catalog
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Blog
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Pages
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              About us
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
      <p className="cattext">30 Days Free Return</p>
    </div>
  );
};
export default Headercat;
