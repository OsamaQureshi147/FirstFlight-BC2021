
export default function TodoItems({ todoList, removeTodo, finishTodo }) {
  return (
    <div>
      <ul>
        {todoList.map((name, index) => {
          return (
            <li
              key={index}
              style={{ textDecoration: name.isCompleted ? 'line-through' : '' }}
            >
              {name.item}
              <span className='todo-btn'>
                <button className='btn btn-outline-primary' onClick={() => removeTodo(index)}>Del</button>
                <button className='btn btn-outline-primary' onClick={() => finishTodo(index)}>Complete</button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
