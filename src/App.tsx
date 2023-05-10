import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { TodosPage } from './components/TodosPage'
import { UserItemPage } from './components/UserItemPage'
import { UserPage } from './components/UserPage'

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="1">
        <NavLink to='/users'>users</NavLink>
        <br/>
        <NavLink to='/todos'>todos</NavLink>
      </div>
      <Routes>
        <Route path='/users' element={<UserPage></UserPage>}></Route>
        <Route path='/todos' element={<TodosPage></TodosPage>}></Route>
        <Route path='/user/:id' element={<UserItemPage></UserItemPage>}></Route>
        <Route path='/todo/:id' element={<UserItemPage></UserItemPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
