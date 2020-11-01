import React, { useState } from "react";
import TodoItem from "./Todo-item";

const TodoList = () => {
  const [state, setState] = useState({
    todo: "",
    todolist: [],
  });
  const [edit, setEdit] = useState({
    editTodo: "",
    editIndex: "",
  });

  const [isUpdate, setIsUpdate] = useState(false);

  const { todo, todolist } = state;
  const { editTodo, editIndex } = edit;

  /* Handle on change for update/edit */
  const onChangeHandleEdit = (e) => {
    const { name, value } = e.target;

    setEdit({ ...edit, [name]: value });
  };
  //Edit Button
  const handleOnClickEdit = (index, value) => {
    setIsUpdate(true);
    setEdit({ editTodo: value, editIndex: index })

  };
  //Cancel Button
  const handleOnClickCancel = () => {
    setIsUpdate(false);
  };

  /* HandleonChange for Create */
  const onChangeHandle = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  /* Create */
  const createTodo = () => {
    const list = todolist; // [] Empty array which is the current list
    list.push(todo); // Current + Current todo input

    setState({ todo: "", todolist: list });
  };

  /* Delete */
  const deleteTodo = (index) => {
    const list = todolist; // [] Empty array which is the current list
    list.splice(index, 1); // Current + Current todo input

    setState({ todo: "", todolist: list });

  };

  /* Update */
  const updateTodo = (index) => {
    const list = todolist; // [] Current tablo Data
    list[index] = editTodo; // Current + Current todo input Updated

    setState({ ...state, todolist: list });
    setIsUpdate(false);
    setEdit({ editTodo: '', editIndex: '' })
  }

  console.log(state);
  return (
    <div className="todolist-section">
      <div className="form-wrapper">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          name="todo"
          value={todo}
          onChange={onChangeHandle}
        />
        <button
          type="button"
          className="btn"
          id="buttonAdd"
          onClick={createTodo}
        >
          Add Todo
        </button>
      </div>
      <div className="table-main">
        <table>
          <thead>
            <tr>
              <th>My Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todolist.length ? (
              todolist.map((value, index) => {
                return (
                  <TodoItem
                    key={index}
                    index={index}
                    value={value}
                    deleteTodo={deleteTodo}
                    handleOnClickEdit={handleOnClickEdit}
                  />
                );
              })
            ) : (
                <tr>
                  <td colSpan="2">No Todo-list found!</td>
                </tr>
              )}

            {isUpdate ? (
              <tr>
                <td><input
                  type="text"
                  className="form-control"
                  placeholder="Update Todo"
                  name="editTodo"
                  value={editTodo}
                  onChange={onChangeHandleEdit}
                /></td>
                <td>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => updateTodo(editIndex)}
                  >
                    Update
                </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={handleOnClickCancel}
                  >
                    Cancel
                </button>
                </td>
              </tr>
            ) : (
                ""
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
