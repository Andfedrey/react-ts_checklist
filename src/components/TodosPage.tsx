import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ITodo } from '../types/User'
import Lists from './Lists'
import { TodoItem } from './TodoItem'

export const TodosPage:React.FC = () => {
  const [todo, setTodo] = useState<ITodo[]>([])
  const fetchTodo = async() => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      setTodo(response.data)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    fetchTodo()
  }, [])
  return (
    <Lists 
      items={todo} 
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}></TodoItem>}
    />
  )
}
