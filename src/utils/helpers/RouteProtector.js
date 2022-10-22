import { Navigate } from "react-router-dom";
import { SelectUser } from "../../store";

export const ProtectedRoute = ({ children }) => {
   const user = SelectUser()
   if (user) return <Navigate to="/" replace />
   else return children

}