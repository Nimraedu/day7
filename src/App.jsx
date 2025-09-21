import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="p-4 bg-green-300">Box with padding</div>
<div class="m-4 bg-blue-300">Box with margin</div>
<div class="flex justify-center items-center h-40 bg-gray-200">
  <div class="bg-blue-400 p-1">Box 1</div>
  <div class="bg-red-400 p-3">Box 2</div>
  <div class="bg-green-400 p-4">Box 3</div>
</div>

<div class="grid grid-cols-3 gap-4 p-4 bg-gray-100">
  <div class="bg-blue-300 h-20">1</div>
  <div class="bg-green-300 h-20">2</div>
  <div class="bg-red-300 h-20">3</div>
  <div class="bg-yellow-300 h-20">4</div>
  <div class="bg-purple-300 h-20">5</div>
  <div class="bg-pink-300 h-20">6</div>
</div>



      
    </>
  )
}

export default App
