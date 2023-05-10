import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IUser } from '../types/User'

interface UserItemPageParams {
  id: string;
  [key: string]: string | undefined;
}

export const UserItemPage = () => {
  const {id} = useParams<UserItemPageParams>()
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser | null>(null)
  const fetchUsers = async() => {
    try {
      const response = await axios.get<IUser>('http://jsonplaceholder.typicode.com/users/' + id )
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    fetchUsers(); 
  }, [])
  return (
    <div>
      <h1>Страница пользователя - {user?.name}</h1>
      <button onClick={() => navigate('/users')}>back</button>
    </div>
  )
}
