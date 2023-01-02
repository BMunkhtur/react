import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    { name: "naraa", age : 23},
    { name: "saraa", age : 26},
    { name: "bataa", age : 24},
    { name: "ganaa", age : 24},
    { name: "enkhee", age : 24}
  ]
  let sum = 0;
  let i = 0;
  while (i <users.length) {
    sum += users[i].age;
    i++;
  }
  return (
    <div className="App">
    <h1>Hun</h1>
    <p>{users[0]}</p>
    </div>
  );
}

export default App;