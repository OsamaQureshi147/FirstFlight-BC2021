import { useState } from 'react';
import './App.css';
import TodoItems from './TodoItems';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState({
    item: '',
    isCompleted: false
  });
  const onClick = (e) => {
    e.preventDefault();
    if (todoItem.item === "") {
      alert("Please fill something to be added!");
    }
    else {
      todoList.push(todoItem);
      setTodoList([...todoList]);
      setTodoItem({
        item: '',
        isCompleted: false
      });
    }
  };
  const removeTodo = (index) => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };
  const finishTodo = (index) => {
    todoList[index].isCompleted = true;
    setTodoList([...todoList]);
  };
  return (
    <div className='text-center'>
      <h1 className='header-todo'>TodoList Application</h1>
      <div className='card'>
        <form onSubmit={onClick}>
          <input
            autoFocus
            placeholder='Add ToDo items'
            type='text'
            value={todoItem.item}
            onChange={(e) => setTodoItem({
              item: e.target.value,
              isCompleted: false
            })}
          />
          <button className='btn btn-primary' type='button' onClick={onClick}>
            Add
          </button>
        </form>
        <div className='card-body'>
          <TodoItems todoList={todoList} removeTodo={removeTodo} finishTodo={finishTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
