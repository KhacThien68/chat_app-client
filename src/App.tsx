import { Route, Routes, useNavigate } from 'react-router-dom'
import Auth from './pages/auth'
import PrivatePages from './pages/privatePages'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './utils/storage'
import { setUser } from './store/authStore/slice'
function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
    dispatch(setUser(user))
  }, [user, dispatch, navigate])
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/*" element={<PrivatePages />} />
    </Routes>
  )
}

export default App
