import React from 'react';
import './App.css';


import Product from './Components/Product';

import SearchAppBar from './Components/SearchAppBar';


import Employee from './Components/Employee';


import { ListGroupItem, ListGroup } from "reactstrap";

import Header from './Components/Header';

import Products from './Components/Product';

import ReactNav from "./Components/ReactNav";

import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Toast, Container, Row, Col } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Link, } from 'react-router-dom';


function App() {

  return (
    <>


      <>

        <hr />
        <SearchAppBar />   <ReactNav />      <Header />

        <hr />
        <hr />
        <hr />
        <Employee />
        <hr />
        <hr />

      </>
    </>

  );

}

export default App;
