import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export async function fetchTodos(number: number) {
  const { data } = await axios.get<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${number}`
  );
  return data;
}

export async function fetchUsers() {
  const { data } = await axios.get<User[]>(
    `https://jsonplaceholder.typicode.com/users`
  );
  return data;
}
