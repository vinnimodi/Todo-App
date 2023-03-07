import { db } from "../firebase";
import {
  collection,
  addDoc,
  //   getDocs,
  //   deleteDoc,
  //   doc,
  //   updateDoc,
} from "firebase/firestore";
import { useState } from "react";

function AddTodo() {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="input_container"> */}
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Enter Todo"
        type="text"
      ></input>
      <span className="btn_container">
        <button>Add</button>
      </span>
      {/* </div> */}
    </form>
  );
}
export default AddTodo;
