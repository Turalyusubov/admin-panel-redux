import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom'
import AdminPanel from './pages/AdminPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </div>
  )
}

export default App
