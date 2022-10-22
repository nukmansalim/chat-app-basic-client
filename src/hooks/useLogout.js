import { useDispatch } from "react-redux"
import { logout } from "../store/slices/AuthSlice"


const useLogout = () => {
   const dispatch = useDispatch()
   const handleLogout = () => {


      dispatch(logout())
      window.location.reload()
   }
   return [handleLogout]
}


export default useLogout