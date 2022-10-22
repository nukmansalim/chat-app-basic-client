
import PostRegister from "../utils/api/PostRegister";
import { useState } from "react";
import { register } from "../store/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { SelectUser } from "../store";
import { RegisterForm } from "../components/Forms";
export default function Register() {
   const user = SelectUser()
   const dispatch = useDispatch()
   const [error, setError] = useState(null)
   const [username, setUsername] = useState("")
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const registerMutation = PostRegister()
   const navigate = useNavigate()




   const handleRegister = (e) => {

      e.preventDefault()

      registerMutation.mutate({
         username,
         firstName,
         lastName,
         email,
         password
      }, {
         onSuccess: data => {
            if (data?.message === "OK") {
               dispatch(register(data.user))
               if (user !== null) return navigate("/", { replace: true })
            }
         },
         onError: data => {
            setError(data)
         }
      })

   }
   return (
      <RegisterForm setUsername={setUsername}
         setFirstName={setFirstName}
         setLastName={setLastName}
         setEmail={setEmail}
         handleRegister={handleRegister}
         setPassword={setPassword} />
   )
}