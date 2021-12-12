import {
  Flex, Link, Button, Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import React from 'react';

const Navbar = () => {
  return (
    <Flex>
      <Flex pos={'fixed'}
            width={'100%'}
            px={'1rem'}
      >
        <Flex
          m={'1rem'}
          justifyItems={'flex-start'}
          justifyContent={'flex-start'}
          alignContent={'center'}
          height={'auto'}
          width={'50%'}>
          <Heading
            alignContent={'center'}
            as={'h1'}
            size={'lg'}
          >
            Fund Tracker
          </Heading>
        </Flex>

        <Flex
          height={'auto'}
          m={'1rem'}
          justifyItems={'flex-end'}
          justifyContent={'flex-end'}
          width={'50%'}>
          <Flex>
            <Link>
              <Button
                as='a'
                href={'/'}
                variant='ghost'>
                Home
              </Button>
            </Link>

            <Link>
              <Button
                as='a'
                href={'/profile'}
                variant='ghost'>
                Profile
              </Button>
            </Link>

            <Link>
              <Button
                as='a'
                href={'/login'}
                variant='ghost'>
                Sign in
              </Button>
            </Link>
            <ColorModeSwitcher />

          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;