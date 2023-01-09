import React from 'react';
import { TodoType } from '../types/Todo.types';

interface Props {
  todo: TodoType;
}

const Todo: React.FC<Props> = ({ todo }) => {
  return (<div className='todo'>{todo.title}</div>);
};

export default Todo;
