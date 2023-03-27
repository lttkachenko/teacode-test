import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

import { AppDataProvider } from './contexts';
import { UsersList } from './components';

import logo from './logo.svg';
import './App.scss';

const App = () => (
  <AppDataProvider>
    <div className="app">
      <header>
        <Navbar className="my" color="dark" dark>
          <NavbarBrand href="/">
            <img alt="logo" src={logo} className="logo" />
            Tea-Code Test &raquo; Contacts
          </NavbarBrand>
        </Navbar>
      </header>
      <main>
        <UsersList />
      </main>
      <footer>
        <Navbar className="my" color="dark" dark>
          <NavbarBrand href="/">Tea-Code&reg; 2023</NavbarBrand>
        </Navbar>
      </footer>
    </div>
  </AppDataProvider>
);

export default App;
