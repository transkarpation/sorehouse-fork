import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Nav from './components/nav';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Nav></Nav>
      <Container>
      <Switch>

          <Route path="/auth/login">
            <Login></Login>
          </Route>
          <Route path="/auth/register">
            <Register></Register>
          </Route>
      </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
