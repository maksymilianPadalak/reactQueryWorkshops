import React, { useState } from "react";
import Todo from "./components/Todo";
import Users from "./components/Users";

function App() {
  const [areUsersOpened, setAreUsersOpened] = useState<boolean>(false);
  return (
    <div className={"w-100 d-flex flex-column align-items-center"}>
      <h1>Witam na warsztatach z React Query</h1>
      <Users />
      <Todo />
      <h3 className={"m-3"}>Cached users</h3>
      <button
        className={"btn btn-danger"}
        onClick={() => {
          setAreUsersOpened((prevState) => !prevState);
        }}
      >
        {areUsersOpened ? "Hide cached users" : "Show cached users"}
      </button>
      {areUsersOpened && <Users />}
    </div>
  );
}

export default App;
