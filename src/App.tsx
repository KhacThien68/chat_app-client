import { Route, Routes, useNavigate } from 'react-router-dom'
import Auth from './pages/auth'
import PrivatePages from './pages/privatePages'
import { useEffect } from 'react'
import { getUser } from './store/authStore/slice'
import { useSelector } from 'react-redux'
function App() {
  const navigate = useNavigate()
  const user = useSelector(getUser)
  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user])
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/*" element={<PrivatePages />} />
    </Routes>
  )
}

export default App
