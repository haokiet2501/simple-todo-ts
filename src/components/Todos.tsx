import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoContextType, ITodo } from '../utils/todo'
import Todo from './Todo'

const Todos = () => {
    const {todos, updateTodo} = useContext(TodoContext) as TodoContextType;

    return (
        <>
            {todos.map((todo: ITodo) => (
                <Todo 
                    key={todo.id} 
                    updateTodo={updateTodo}  
                    todo={todo} 
                />
            ))}
        </>
    )
}

export default Todos