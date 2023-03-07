import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Product({ todoEdit, todoDelete, todoComplete, todo }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    //  e.preventDefault();
    if (todo.complete === true) setNewTitle(todo.title);
    else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className="todo">
      <button
        style={{
          backgroundColor: todo.completed ? "lightgreen" : "transparent",
        }}
        className="button-complete"
        onClick={() => todoComplete(todo)}
      >
        <DoneIcon
          style={{ display: todo.completed ? "initial" : "none" }}
          id="i"
        />
      </button>
      <input
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") todoEdit(todo, newTitle);
          
        }}
      />
      <div>
        <button
          className="button-edit"
          onClick={() => todoEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => todoDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}

export default Product;
