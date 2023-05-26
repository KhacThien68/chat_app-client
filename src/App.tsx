import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/privateLayout'
import { getUser } from './utils/storage'
import Auth from './pages/auth'
function App() {
  const user = getUser()
  if (!user) {
    return <Navigate to="/auth" replace />
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="/*"
        element={
          <Layout>
            <div>đây là content</div>
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
