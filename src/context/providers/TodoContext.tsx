import { TodoContext } from '../context';
import { useState, ReactNode } from 'react';
import { Todo } from '../../App';

export function TodoContextProvider({ children }: { children: ReactNode }) {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ setTodoList, todoList }}>
      {children}
    </TodoContext.Provider>
  );
}
