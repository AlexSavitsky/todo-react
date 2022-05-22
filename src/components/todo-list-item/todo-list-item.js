import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-danger">
        <i class="fa-regular fa-trash-can"></i>
      </button>

      <button type="button" className="btn btn-outline-success">
        <i class="fas fa-exclamation"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
