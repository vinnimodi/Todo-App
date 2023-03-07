import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Product from "./components/Product";
import { db } from "./firebase";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const todoDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  const todoEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title });
  };
  const todoComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Todo App</h1>
      </div>
      <AddTodo> </AddTodo>
      <div className="todo_container">
        {todos.map((todo) => (
          <Product
            key={todo.id}
            todo={todo}
            todoComplete={todoComplete}
            todoEdit={todoEdit}
            todoDelete={todoDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
