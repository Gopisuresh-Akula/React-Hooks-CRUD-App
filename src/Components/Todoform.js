import React, { useState, useContext, useEffect } from "react";
import { Input } from "antd";
import TodosContext from "../Context";

const Todoform = () => {
  const [todo, setTodo] = useState("");
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    }
  }, [currentTodo.id]);

  const handlesubmit = event => {
    console.log("todo.......", todo);
    event.preventDefault();


    if (currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo });

    }
  else{
    dispatch({ type: "ADD_TODO", payload: todo });
  }
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div style={{ width: 300, margin: "10px auto" }}>
          <Input
            type="text"
            className="border-black border-solid border-2"
            onChange={event => setTodo(event.target.value)}
            value={todo}
          />
        </div>
      </form>
    </>
  );
};

export default Todoform;
