import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/post'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)
  

  return (
   <div className='flex w-full border gap-3'>
    <div className='w-8/12'>
       <Post/>
    </div>

    <div className='w-4/12'>
      <h2 className='font-bold'>PEOPLE YOU MAY KNOW</h2>
         <Users/>
    </div>
    
   </div>
  )
}

export default App
