import {
   Box, FormControl, Input, Flex, Heading,
   Button,
} from "@chakra-ui/react";

export default function RegisterForm({
   setUsername,
   setFirstName,
   setLastName,
   setEmail,
   setPassword,
   handleRegister
}) {
   return (
      <Box background="url('https://images2.alphacoders.com/108/1081121.png')"
         width="100%" height="100vh"

         backgroundSize={"cover"} overflow="hidden">

         <Flex width="90%" marginX={"5%"} marginTop="10" align="center" height='2xl' justifyContent="center">
            <Box p={2} width="60%" background={"whiteAlpha.700"} rounded="lg" padding={"4"}>
               <Box textAlign="center" >
                  <Heading>Sign Up</Heading>
                  <Box my={4} textAlign="left">
                     <FormControl>
                        <Input type="text"
                           focusBorderColor="null"
                           border={"hidden"}
                           _placeholder={{ color: 'blackAlpha.600' }}
                           borderColor={"blackAlpha.600"}
                           onChange={e => setUsername(e.target.value)}
                           placeholder="Username" />
                        <Box marginY="4" display="flex" >
                           <Input type="text" width="50%"
                              focusBorderColor="null"
                              border={"hidden"}
                              _placeholder={{ color: 'blackAlpha.600' }}
                              borderColor={"blackAlpha.600"}
                              onChange={e => setFirstName(e.target.value)}
                              marginRight={3} placeholder="First Name" />
                           <Input type="text"

                              focusBorderColor="null"
                              border={"hidden"}
                              _placeholder={{ color: 'blackAlpha.600' }}
                              borderColor={"blackAlpha.600"}
                              onChange={e => setLastName(e.target.value)}
                              width="50%" placeholder="Last Name" />
                        </Box>
                        <Input type="email"
                           focusBorderColor="null"
                           border={"hidden"}
                           _placeholder={{ color: 'blackAlpha.600' }}
                           borderColor={"blackAlpha.600"}
                           onChange={e => setEmail(e.target.value)}
                           placeholder="Email. Example: johndoe@gmail.com" />

                        <Input
                           focusBorderColor="null"
                           border={"hidden"}

                           _placeholder={{ color: 'blackAlpha.600' }}
                           borderColor={"blackAlpha.600"}
                           onChange={e => setPassword(e.target.value)}
                           type="password" mt="4" placeholder="Password" />




                        <Button
                           focusBorderColor="null"
                           border={"hidden"}
                           borderColor={"gray.300"}
                           colorScheme={'yellow'}
                           onClick={handleRegister} float={'right'} mt={4} type="submit">
                           Sign Up
                        </Button>
                     </FormControl>
                     <Box>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Flex>
      </Box>
   )
}