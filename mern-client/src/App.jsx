import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'
import { CartProvider } from './inventoryshop/CartContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <div>
        <Navbar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <MyFooter />
      </div>
    </CartProvider>
  )
}

export default App