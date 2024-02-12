import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Component/CreateTodo'
import { Todos } from './Component/Todos'

function App() {
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </div>
  )
}

export default App
