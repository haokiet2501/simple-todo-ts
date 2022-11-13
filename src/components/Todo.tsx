import React from 'react'
import { ITodo } from '../utils/todo'

type Props = {
    todo: ITodo;
    updateTodo: (id: number | string) => void;
}

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
    const checkTodo: string = todo.status ? `line-through` : '';

    return (
        <div className="card">
            <div className="card__text">
                <h1 className={checkTodo}>{todo.title}</h1>
                <span className={checkTodo}>{todo.description}</span>
            </div>

            <button 
                onClick={() => updateTodo(todo.id)} className={todo.status ? `todo__btn-hidden` : 'todo__btn todo__btn-gr'}
            >
                Complete
            </button>
        </div>
    )
}

export default Todo