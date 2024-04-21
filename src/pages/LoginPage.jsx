import { Box, FormControl, FormLabel, Input, Button, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <Box>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button size="lg" colorScheme="blue" w="full" mt={4} boxShadow="md">
        Login
      </Button>
      <Text mt={4}>
        Don't have an account? <Link as={RouterLink} to="/signup" color="blue.500">Sign up</Link>
      </Text>
      <Text mt={4}>
        Or log in with SSO: {/* Add SSO login options */}
      </Text>
    </Box>
  );
};

export default LoginPage;