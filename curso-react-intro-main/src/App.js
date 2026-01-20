import React from 'react';
import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos=[
  {text: "Grabar video", completed: false},
  {text: "Editar código", completed: true},
  {text: "Lavar loza", completed: false},
  {text: "Ir al médico", completed: false}
]

function App() {
  return (
    <React.Fragment>

      <TodoTitle completed={3} total={10}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
        {[]}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}


export default App;
