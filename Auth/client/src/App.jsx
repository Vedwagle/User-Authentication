//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import User from './User'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/register/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/user' element={<User />}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
