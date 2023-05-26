import { useLocation } from 'react-router-dom'
import Layout from '../../layouts/privateLayout'
import RenderRoute from '../../route/RenderRoute'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MENU_OPTIONS } from '../../layouts/privateLayout/header/constants'
import { changeActiveMenu } from '../../app/slice'

const PrivatePages: React.FC = () => {
  const dispatch = useDispatch()

  const { pathname } = useLocation()
  useEffect(() => {
    const ComponentKey =
      Object.values(MENU_OPTIONS).find((item) => item.path === pathname)?.key ||
      0
    dispatch(changeActiveMenu(ComponentKey))
  }, [pathname, dispatch])
  return (
    <Layout>
      <RenderRoute />
    </Layout>
  )
}

export default PrivatePages
