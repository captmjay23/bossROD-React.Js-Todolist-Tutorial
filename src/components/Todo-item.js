import React from "react";

const TodoItem = (props) => {
  const { index, value, deleteTodo, handleOnClickEdit } = props;
  return (
    <tr key={index}>
      <td>{value}</td>
      <td>
        <button id="edit" onClick={() => handleOnClickEdit(index)}>
          Edit
        </button>
        <button id="delete" onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
