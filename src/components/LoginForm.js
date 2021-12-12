import { Flex, Input, VStack } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <Flex align={'center'} height={'90vh'} width={'100vw'} justify={'center'}>
      <VStack>
        <FormControl id='email'>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl id='email'>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl id='email'>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </VStack>
    </Flex>

  );
};

export default LoginForm;