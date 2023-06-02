import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth'
import PrivatePages from './pages/privatePages'
import { useDispatch } from 'react-redux'
import { getUser } from './utils/storage'
import { setUser } from './store/authStore/slice'
function App() {
  const dispatch = useDispatch()
  const user = getUser()

  if (!user) {
    return <Navigate to="/auth" replace />
  } else {
    dispatch(setUser(user))
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/*" element={<PrivatePages />} />
    </Routes>
  )
}

export default App
