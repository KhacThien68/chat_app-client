import { Button } from "antd"
import { useDispatch } from "react-redux"
import { logout } from "../../../../store/authStore/action"

const RightContent: React.FC = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
  dispatch(logout())
  }
  return <div>
    <Button onClick={handleLogout}>Log out</Button>
  </div>
}
export default RightContent
