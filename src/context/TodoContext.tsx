import { createContext, useState } from 'react'
import { TodoContextType, ITodo } from '../utils/todo';
import { v4 as uuidv4} from 'uuid'

export const TodoContext = createContext<TodoContextType | null>(null);

interface props {
    children: React.ReactNode
}

const TodoProvider = ({children}: props) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
    {
      id: 3,
      title: 'post 3',
      description: 'this is a description',
      status: true,
    },
  ]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: uuidv4(),
      title: todo.title,
      description: todo.description,
      status: todo.status
    }

    setTodos([...todos, newTodo])
  }

  const updateTodo = (id: number | string) => {
    // eslint-disable-next-line array-callback-return
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true
        setTodos([...todos])
      }
    })
  }

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;