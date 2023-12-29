import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/LoginPage'
import Search from './pages/Search/Search'


const Private = ({ Item }) => {
    const signed = false;

    return signed ? <Item /> : <Login />
} 

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Home' element={<Private Item={Home}/>}/>
          <Route path='/Search' element={<Search/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
