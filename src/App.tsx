import { useReducer, useRef } from 'react';

const Heading = (
  {title}: { title: string }
) => {
  return <h2 className='titleTodo'>{title}</h2>
}

type TypeAction = 
  | { type: TodoAction.SetAdd, text: string }
  | { type: TodoAction.SetRemove, id: number};

interface Todo {
  id: number,
  text: string
}

enum TodoAction {
  SetAdd = 'SET_ADD',
  SetRemove = 'SET_REMOVE'
}

const reducer = (state: Todo[], action: TypeAction) => {
  switch (action.type) {
    case TodoAction.SetAdd:
      return [
        ...state,
        {
          id: state.length,
          text: action.text
        }
      ]
      
    case TodoAction.SetRemove:
      return state.filter((todo: Todo) => todo.id !== action.id)  
    default:
      throw new Error("")
  }
}

const initialState:Todo[] = [];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef<HTMLInputElement>(null)
  
  const handleAddTodo = () => {
    if(inputRef.current) {
      dispatch({
        type: TodoAction.SetAdd,
        text: inputRef.current.value
      })

      inputRef.current.value = '';
    }
  }

  const handleRemoveTodo = (todoId: number) => {
    // console.log(todoId);
    if(window.confirm('Bạn có muốn xoá không?')) {
      dispatch({
        type: TodoAction.SetRemove,
        id: todoId,
      })
    }
  }

  return (
    <div>
      <Heading title='Todo App'/>
      <div className="todoCenter">

      <div className="todo">
        <div className="todo__flex">
          <input 
            type="text" 
            className='todo__input' 
            ref={inputRef}
          />
          <button 
            className='todo__btn'
            onClick={() => handleAddTodo()}
          >
            Add
          </button>
        </div>

        <div className="todo__item">
          {todos.length > 0 && 
          todos.map((todo) => (
            <div key={todo.id} className='todo__list'>
              <span className='todo__text'>{todo.text}</span>
              <button 
                className='todo__btn-red todo__btn'
                onClick={() => handleRemoveTodo(todo.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
