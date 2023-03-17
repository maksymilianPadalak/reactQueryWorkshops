import { useQuery } from "react-query";
import { reactQueryKeys } from "../api/reactQueryKeys";
import { fetchTodos } from "../api/apiFunctions";
import { useState } from "react";

function Todo() {
  const [todoId, setTodoId] = useState<number>(1);

  const { data, isLoading, isError } = useQuery(
    [reactQueryKeys.todo, todoId],
    () => fetchTodos(todoId)
  );

  return (
    <div className={"w-100 d-flex flex-column align-items-center mt-5"}>
      <h3>Title</h3>
      <h1 className={"d-flex"}>
        {isLoading
          ? "Loading..."
          : isError
          ? "Error :("
          : `${data?.id}. ${data?.title}`}
      </h1>
      <div>
        <button
          className={"btn btn-warning m-2"}
          onClick={() => setTodoId((prevState) => --prevState)}
        >
          Decrease
        </button>
        <button
          className={"btn btn-success m-2"}
          onClick={() => setTodoId((prevState) => ++prevState)}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Todo;
