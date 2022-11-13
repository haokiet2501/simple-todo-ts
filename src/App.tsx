import React from 'react';
import TodoProvider from './context/TodoContext';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const Heading = (
  {title}: { title: string }
) => {
  return <h2 className='titleTodo'>{title}</h2>
}


function App() {
  return (
      <TodoProvider>
        <Heading title='Todo App'/>
        <div className='todo'>
          <AddTodo />
          <Todos />
        </div>
      </TodoProvider>
  );
}

export default App;
