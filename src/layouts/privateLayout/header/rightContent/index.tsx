import { Button } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../../store/authStore/action'
import { getUser } from '../../../../store/authStore/slice'
import { useNavigate } from 'react-router-dom'

const RightContent: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(getUser)

  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user])

  return (
    <div>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  )
}
export default RightContent
