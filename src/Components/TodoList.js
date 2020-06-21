import React, { useContext } from "react";
import TodosContext from "../Context";
import { Icon } from "antd";

const TodoList = () => {
  const { state,dispatch } = useContext(TodosContext);
  //useContext is useful for consime coming from provider

  const title =
    state.todos.length > 0
      ? `${state.todos.length} Todos`
      : "Nothing to Display!";

  return (
    <>
      <div
        style={{
          marginLeft: "auto",
          textAlign: "center",
          fontFamily: "font-mono"
        }}
      >
        <h1>{title}</h1>
        <ul>
          {state.todos.map(todo => (
            <li
              style={{
                color: "#fff",
                fontSize: "25px",
                backgroundColor: "#00a9e0",
                marginTop: "10px",
                padding: "15px 0px",
                borderRadius: "25px"
              }}
              key={todo.id}
            >
              <span 
              
              onDoubleClick={ ()=> dispatch ({ type:"TOGGLE_TODO",payload:todo})}
              style={{ cursor: "pointer" ,textDecoration:todo.complete &&'line-through',color:todo.complete &&'grey' }}
              
              
              >{todo.text}</span>
              <div>
                <span  onClick={  ()=> dispatch ({ type:"SET_CURRENT_TODO",payload:todo})}  >
                  <Icon type="edit" />
                </span>
                <span  onClick={  ()=> dispatch ({ type:"REMOVE_TODO",payload:todo})}>  
                  <Icon type="delete" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
