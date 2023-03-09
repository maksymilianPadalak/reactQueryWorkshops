import { useQuery } from "react-query";
import { reactQueryKeys } from "../api/reactQueryKeys";
import { fetchUsers } from "../api/apiFunctions";

function Users() {
  const { data, isLoading, isError } = useQuery(
    reactQueryKeys.users,
    fetchUsers,
    { cacheTime: 10 }
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error :(</h1>;

  return (
    <div className={"w-100 d-flex flex-column align-items-center mt-5"}>
      <h3>Users</h3>
      {data?.map((user) => (
        <div key={user.username}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
