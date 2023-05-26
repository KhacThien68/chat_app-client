import { lazy } from 'react'
import { ROUTER, RouterProps } from './config'

const Home = lazy(() => import('../pages/home'))
// const About = lazy(() => import('../pages/About'))
// const DetailRepoUser = lazy(() => import('../pages/DetailPage'))

export const PRIVATE_ROUTERS: RouterProps[] = [
  {
    path: ROUTER.HOME_PAGE,
    element: Home,
  },

]