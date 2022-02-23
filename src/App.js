import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feedback from './components/Feedback'
import Form from './components/Form'

export default function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<Form/>}></Route>
         <Route path="/feed" element={<Feedback/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  )
}
