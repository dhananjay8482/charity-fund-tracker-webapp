import React, { PureComponent } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import {
  ChakraProvider, Box, theme,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import UserHome from './Components/UserHome';
import About from './Components/About';
import CharityDetails from './Components/CharityDetails';
import CharityHome from './Components/CharityHome';

class App extends PureComponent {
  render() {
    return (<>
      <ChakraProvider theme={theme}>
        <Box textAlign='center' fontSize='xl'>
          <Navbar>
            <Switch>
              <Route exact path='/' component={UserHome} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/about' component={About} />
              <Route exact path='/charity/:id/details' component={CharityDetails} />
              <Route exact path='/charity' component={CharityHome} />
            </Switch>
          </Navbar>
        </Box>
      </ChakraProvider>
    </>);
  }
}

export default App;
