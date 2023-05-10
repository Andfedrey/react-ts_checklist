import React from 'react'
import { IUser } from '../types/User'
interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}
export const UserItem:React.FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div  style={{padding:15, border: '1px solid lighgrey'}} onClick={() => onClick(user)}>
      {user.id}. {user.name} living in city {user.address.city} on the street {user.address.street}
    </div>
  )
}
