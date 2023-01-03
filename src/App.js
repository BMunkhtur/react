import "./App.css";
import {UserCard} from './compunent/UserCard'
function App() {
  const users = [
    {
      name: "Alice",
      age: 16,
      imageUrl:
        "https://images.unsplash.com/photo-1672646856394-ec0dd6a4ccec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      name: "Bob",
      age: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1672646856394-ec0dd6a4ccec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      name: "Carl",
      age: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1672646856394-ec0dd6a4ccec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      name: "Dean",
      age: 19,
      imageUrl:
        "https://images.unsplash.com/photo-1672646856394-ec0dd6a4ccec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      name: "Ethan",
      age: 44,
      imageUrl:
        "https://images.unsplash.com/photo-1672646856394-ec0dd6a4ccec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
  ];
  // nasnii dundaj oloh
  let sumAge = users.reduce((prev, cur) => (prev += cur.age), 0);
  let avgAge = sumAge / users.length;
  
  return (
    <div>
      <h1>Average: {avgAge}</h1>
      {
        users.map((user) => (
          <UserCard name={user.name} age={user.age} />
        ))
      }
      </div>
  )
}
export default App;