import { Navigate, Route, Routes } from 'react-router-dom'
import { getUser } from './utils/storage'
import Auth from './pages/auth'
import PrivatePages from './pages/privatePages'
function App() {
  const user = getUser()
  if (!user) {
    return <Navigate to="/auth" replace />
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/*" element={<PrivatePages />} />
    </Routes>
  )
}

export default App
