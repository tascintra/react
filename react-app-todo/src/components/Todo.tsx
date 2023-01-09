import React from 'react';
import { TodoType } from '../types/Todo.types';

interface Props {
  todo: TodoType;
  index: number;
  handleCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Todo: React.FC<Props> = ({ todo, index, handleCompleted, handleDelete }) => {
  return (
    <div
      className='todo'
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.title}
      <div>
        <button
          className='button'
          style={{ color: todo.completed ? '#118800' : '#FF3333' }}
          onClick={() => handleCompleted(index)}
        >
          {todo.completed ? 'Completed' : 'ToDo'}
        </button>
        <button
          className='button'
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
