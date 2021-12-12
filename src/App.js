import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  theme, Flex, Text, VStack,
} from '@chakra-ui/react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import { donorLogin, donorSignup } from './network/Client';

function App() {

  const { ethereum } = window;
  const [wallateAddr, setWalletAddr] = useState('');

  useEffect(() => {
    loginWithEther();
    donorSignup({
      'name': 'joe3',
      'email': 'joe3@gmail.com',
      'username': 'joe3',
      'password': '1234',
      'dob': '2000-06-23',
      'phone1': '+917389983312',
    });
    donorLogin('joe1@gmail.com', 'pass123');
  }, []);

  const loginWithEther = async () => {
    if (ethereum !== undefined) {
      await ethereum.request({ method: 'eth_requestAccounts' }).then(r => {
        if (r !== undefined) {
          setWalletAddr(r[0]);
          console.log(wallateAddr);
        } else {
          console.log('RIP');
        }
      }).catch(m => {
        console.log(m);
      });
    }
  };


  return (
    <ChakraProvider theme={theme}>
      <Flex minH='100vh'>

        <Navbar />
        <Flex height={'100vh'}
              justifyItems={'center'}
              justifyContent={'center'}>

          <VStack>
            <LoginForm />

            <Text>
              {ethereum !== undefined ? 'Metamask is available' : 'Please install metamask'}
            </Text>

            <Text>
              {wallateAddr}
            </Text>
          </VStack>

        </Flex>

      </Flex>
    </ChakraProvider>
  );
}

export default App;
