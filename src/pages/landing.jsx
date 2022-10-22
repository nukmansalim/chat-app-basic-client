import { Box, Button, ButtonGroup, Flex, Heading, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import useLogout from "../hooks/useLogout"
import { SelectUser } from "../store"
import { logout } from "../store/slices/AuthSlice"
export default function Landing() {
   const [doLogOut] = useLogout()
   const user = SelectUser()



   return (
      <>
         <Flex justifyContent={'center'} marginEnd={2} marginTop={2}>
            <Box width="full">
            </Box>
            <Box display='flex'>
               {user ? <Button onClick={doLogOut}>Logout</Button> :
                  <>
                     <ButtonGroup >

                        <Button colorScheme="yellow"><Link to="/register">Register</Link></Button>
                        <Button colorScheme="yellow"><Link to="/login">Login</Link></Button>

                     </ButtonGroup>
                  </>
               }


            </Box>
         </Flex>
         <Flex justifyContent={'center'} alignItems={'center'} height="20em">
            <Heading as='h1' size='lg'>Best Chat App</Heading>
         </Flex>
      </>
   )
}