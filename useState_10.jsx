import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [todos, setTodos] = useState(null);

  const callApi = () => fetch("https://jsonplaceholder.typicode.com/todos/");

  const fetchTodos = () => {
    setLoading(true);
    callApi()
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        console.log("SUCCESS");
      })
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return <div>{todos && todos.slice(0, 5).map((el) => `${el.title} | `)}</div>;
}
