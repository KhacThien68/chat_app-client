import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PRIVATE_ROUTERS } from '.'
import { Loading } from '../components'

const RenderRoute = () => {
  return (
    <Routes>
      {PRIVATE_ROUTERS.map((route, ps) => (
        <Route
          path={route.path}
          element={
            <Suspense fallback={<Loading />}>
              <route.element />
            </Suspense>
          }
          key={ps}
        />
      ))}
    </Routes>
  )
}

export default RenderRoute
