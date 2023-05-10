import React from 'react'
import { ITodo } from '../types/User';
interface TodoItemProps {
  todo: ITodo;
}
export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  return (
    <div>
      <input type='checkbox' checked={todo.completed}></input>
      {todo.id}. {todo.title}
    </div>
  )
}
