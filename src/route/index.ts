import { lazy } from 'react'
import { ROUTER, RouterProps } from './config'

const Home = lazy(() => import('../pages/privatePages/home'))
const About = lazy(() => import('../pages/privatePages/about'))
const Chat = lazy(() => import('../pages/privatePages/chat'))

export const PRIVATE_ROUTERS: RouterProps[] = [
  {
    path: ROUTER.HOME_PAGE,
    element: Home,
  },
  {
    path: ROUTER.ABOUT_PAGE,
    element: About
  },
  {
    path: ROUTER.CHAT,
    element: Chat
  },
]