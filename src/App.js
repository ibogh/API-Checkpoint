import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserList";

function App() {
  const [listOfUSer, setlistOfUSer] = useState([]);
  const [error, seterror] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setlistOfUSer(response.data);
      })

      .catch(function (error) {
        seterror(error);
      });
  }, []);
  return (
    <div className="App">
      <img
        src="https://i.ibb.co/3dHQhx7/imageedit-1-6782754448.png"
        alt="list"
        style={{ width: 200 }}
      />
      <UserList listOfUSer={listOfUSer} />
    </div>
  );
}

export default App;
