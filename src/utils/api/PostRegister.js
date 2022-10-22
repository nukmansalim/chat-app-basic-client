import { useMutation } from "@tanstack/react-query"

const PostRegister = () => {

   const mutation = useMutation(async formData => {

      const response = await fetch('http://localhost:8080/user', {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
      })
      const data = await response.json()

      return data

   })
   return mutation
}
export default PostRegister