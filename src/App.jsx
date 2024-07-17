import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CurrencyConvertor from './components/CurrencyConvertor'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-100flex flex-col items-center justify-center'>
    <CurrencyConvertor/>
    </div>
  )
}

export default App
