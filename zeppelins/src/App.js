import Home from "./pages/homepage/Home";
import Detail from "./pages/detail/Detail";
import { Routes, Route } from "react-router-dom";
// import "../src/App.scss";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}
export default App;
