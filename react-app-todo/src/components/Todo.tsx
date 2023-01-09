import React from 'react';
import { TodoType } from '../types/Todo.types';

interface Props {
  todo: TodoType;
}

const Todo: React.FC<Props> = ({ todo }) => {
  return (
  <div className='todo' style={{textDecoration: todo.completed ? 'line-through' : ''}}>
    {todo.title}
    <div>
      <button className='button' style={{color: todo.completed ? '#179808' : '#FF3333'}}>{todo.completed ? 'Completed' : 'Incompleted'}</button>
    </div>
  
  </div>);
};

export default Todo;
