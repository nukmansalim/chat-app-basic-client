import { Input } from "@chakra-ui/react"
import { useState } from "react"

export default function UsernameField({ setUsername }) {

   return (

      <Input type="text"
         _focus={{ _placeholder: { opacity: 0 }, }}
         focusBorderColor="null"
         border={"hidden"}
         _placeholder={{ color: 'white' }}
         borderColor={"gray.600"}
         onChange={e => setUsername(e.target.value)}
         placeholder="Username" />

   )
}