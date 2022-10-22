import { Input } from "@chakra-ui/react"
export default function PasswordField({ setPassword }) {
   return (

      <Input type="text"
         _focus={{ _placeholder: { opacity: 0 }, }}
         focusBorderColor="null"
         border={"hidden"}
         _placeholder={{ color: 'white' }}
         borderColor={"gray.600"}
         onChange={e => setPassword(e.target.value)}
         placeholder="Password" />
   )
}