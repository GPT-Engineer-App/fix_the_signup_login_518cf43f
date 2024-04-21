import { Box, FormControl, FormLabel, Input, Button, VStack } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Box>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        {/* Add password strength indicator */}
      </FormControl>
      {/* Add OAuth integration, forgot password functionality */}
      <VStack spacing={6} my={8}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button size="lg" colorScheme="blue" w="full" mt={4} boxShadow="md">
          Sign Up / Login
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUpPage;
