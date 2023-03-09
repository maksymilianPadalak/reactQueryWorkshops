import axios from "axios";

interface Post {
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

export async function fetchPosts(number: number) {
  const { data } = await axios.get<Post>(
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
