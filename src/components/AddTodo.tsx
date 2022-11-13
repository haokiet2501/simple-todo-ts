import React, { useContext, useState } from 'react'
import { ITodo, TodoContextType } from '../utils/todo'
import { TodoContext } from '../context/TodoContext'

const AddTodo: React.FC = () => {
    const { saveTodo } = useContext(TodoContext) as TodoContextType;
    const [formData, setFormData] = useState<ITodo | {}>();

    const handleFormData = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        })


    }

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo  | any) => {
        e.preventDefault();
        saveTodo(formData);
    }
    return (
        <form 
            className='form'
            onSubmit={(e) => handleSaveTodo(e, formData)}
        >
            <div className='todo__infor'>
                <div className='todo__top'>
                    <label htmlFor="name" className='todo__name'>Title</label>
                    <input onChange={handleFormData} type="text" id='title' className='todo__input' />
                </div>
                <div className='todo__top'>
                    <label htmlFor="description" className='todo__desc'>Description</label>
                    <input onChange={handleFormData} type="text" id='description' className='todo__input'/>
                </div>
            </div>

            <div>
                <button 
                    className='todo__btn'
                >
                    Add Todo
                </button>
            </div>
        </form>
    )
}

export default AddTodo