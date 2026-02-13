import { useState } from 'react'
import './App.css'
import IncomeForm from './components/income/IncomeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>WealthOS</h1>
      <IncomeForm></IncomeForm>
    </div>
    </>
  )
}

export default App
