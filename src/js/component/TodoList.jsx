import React, { useState, useEffect } from "react";
import "../../styles/index.css";



const TodoList = () => {
  const [todos, setTodos] = useState(["Arremangala Arrempujala si", "Arremangala Arrempujala no"]);
  const [inputValue, setInputValue] = useState("")
  
  const createTodos = (value, index) => {
    return (
      <div
      className="list-item d-flex justify-content-between"
        key={index}
        itemID={index}
      >
        {value}
        <button className="delete-btn btn text-danger" onClick={(e) => deleteTodo(e)}>X</button>
      </div>
    );
  };

  const addTodo = (e) => {
    if (e.key != "Enter") return
    if( inputValue === "" || inputValue.length < 2){
      alert(`${inputValue === "" ? "La entrada no puede estar vacia" : "Debe contener 2 o mas caracteres"}`)
      return
    }
    if(todos.includes(inputValue)){
      alert("Esta tarea ya fue ingresada")
      setInputValue("")
      return
    }

    setTodos([...todos,inputValue])
    setInputValue("")
  
  };

const deleteTodo = (e) =>{
    let itemId = e.currentTarget.parentNode.getAttribute("itemID")
    let auxArr = [...todos]
    auxArr.splice(itemId,1)
    setTodos(auxArr)
  }

  return (
    <div className="main-container">
      <div className="sheet ">
        <div className="sheet d-flex flex-column align-items-center table-container">
          <div className="table-head text-center "><h1 className="title">TODOS</h1></div>
          <div className="table-input w-75">
                    <input type="text" name="tasksInput" id="tasksInput" value={inputValue} placeholder="What needs to be done" className="form-control mb-2" onKeyDown={(e)=>addTodo(e)} onChange={(e) =>{
                      setInputValue(e.currentTarget.value)
                    }}/> </div>


              {todos.length > 0 ? (
                todos.map(createTodos)
              ) : (
                <div className="d-flex justify-content-center ">
                  <h1 className="text-center" style={{ margin: "auto"}}>
                  No tasks, add a task
                  </h1>
                </div>
              )}
            <div className="list-item text-secondary todo-footer">
              {todos.length > 0
                ? `${todos.length} ${
                    todos.length === 1 ? "item" : "items"
                  } left `
                : "there are no more items left"}{" "}
            </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
