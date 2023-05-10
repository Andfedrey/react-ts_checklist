import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../types/User'
import Lists from './Lists'
import { UserItem } from './UserItem'


export const UserPage:React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate()
  const fetchUsers = async() => {
      try {
        const response = await axios.get<IUser[]>('http://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      } catch (error) {
        alert(error)
      }
    }
  useEffect(() => {
      fetchUsers(); 
    }, [])

  return (
    <Lists
      items={users} 
      renderItem={(user: IUser) => (
        <UserItem 
          user={user}
          key={user.id}
          onClick={(user: IUser) => navigate('/user/' + user.id)}
          ></UserItem>
      )}
    />
  )
}
