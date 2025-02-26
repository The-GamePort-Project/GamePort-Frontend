import { createContext, useContext } from 'react';
import { Todo } from '../App';

interface TodoContextInterface {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoContext = createContext<TodoContextInterface>({
  todoList: [],
  setTodoList: () => [],
});
export const useTodoContext = () => useContext(TodoContext);

// interface UserContextInterface {}
