import "./App.css";
import Card from "./comp/card/Card";
import { datas } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./comp/card/Search";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState(datas);
  return (
    <div>
      <div className="container">
        <h1 className="text-center">User List</h1>
        <Search />
        <Card users={userList} />
      </div>
    </div>
  );
}
export default App;
