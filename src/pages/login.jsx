import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import usePostLogin from "../utils/api/PostLogin";
import { SelectUser } from "../store";
import { LoginForm } from "../components/Forms";
export default function Login() {
   const dispatch = useDispatch()
   const [Error, setError] = useState(null)
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const user = SelectUser()
   const navigate = useNavigate()
   const LoginMutation = usePostLogin()



   const handleLogin = (e) => {
      e.preventDefault()
      LoginMutation.mutate({ username, password }, {
         onSuccess: data => {
            if (data?.message === "OK") {

               dispatch(login(data.user))
               if (user !== null) return navigate("/", { replace: true })
            }
         },
         onError: data => {
            setError(data)
         }
      })


   }
   return (
      <>
         <LoginForm handleLogin={handleLogin} setPassword={setPassword} setUsername={setUsername} />
      </>
   )
}