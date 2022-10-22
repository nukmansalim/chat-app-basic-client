import UsernameField from "./UsernameField";
import { Flex, Box, Heading, FormControl, Button, Input } from "@chakra-ui/react";
import PasswordField from "./PasswordField";

export default function LoginForm({ setUsername, setPassword, handleLogin }) {
   return (
      <Box background="url('https://images2.alphacoders.com/108/1081121.png')"
         width="100%" height="100vh"

         backgroundSize={"cover"} overflow="hidden">

         <Flex width="full" align="center" height={'3xl'} justifyContent="center">
            <Box p={2} width="60%" background={"gray.700"} rounded="lg" padding={"4"} >
               <Box textAlign="center" >
                  <Heading>Sign in</Heading>
                  <Box my={4} textAlign="left">
                     <FormControl>
                        <UsernameField setUsername={setUsername} />
                        <PasswordField setPassword={setPassword} />






                        <Button colorScheme={'yellow'} float={'right'} onClick={handleLogin} mt={4} type="submit">
                           Sign in
                        </Button>
                     </FormControl>

                  </Box>
               </Box>
            </Box>
         </Flex>
      </Box>
   )
}