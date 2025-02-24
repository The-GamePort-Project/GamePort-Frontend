import { useState } from 'react';
import React from 'react';
import './App.css';
interface Todo {
  id: string;
  completed: boolean;
  task: string;
}
function App() {
  function generateRandomId(): string {
    return Math.floor(Math.random() * 1000).toString();
  }
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodoTask, setNewTodoTask] = useState<string>('');
  function addTodo(): void {
    if (!newTodoTask) {
      return;
    }
    const newTodo = {
      task: newTodoTask,
      completed: false,
      id: generateRandomId(),
    };
    const newTodoList: Todo[] = [...todoList, newTodo];
    setTodoList(newTodoList);
  }
  function removeTodo(id: string): void {
    if (!id) {
      return;
    }
    const updatedTodoList: Todo[] = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  }
  function handleInput(e: Event) {
    const value = e.
  }
  return (
    <>
      <h1>Hello</h1>
      <label htmlFor="todo-input">
        <input id="todo-input" type="text" value={newTodoTask} onChange={se} />
      </label>
      <button disabled={!newTodoTask} onClick={addTodo}>
        Add todo
      </button>
      <ul>
        {todoList &&
          todoList.map((todo) => (
            <li>
              <div
                style={{ display: 'flex', flexDirection: 'column' }}
                key={todo.id}
              >
                {todo.task}
                {todo.completed}
                <button onClick={() => removeTodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
