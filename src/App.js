import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
// import data from './list.json';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Roster from './components/Roster.js';


const Styles = styled.div`
display: block;
max-width: 100%;
padding: 1rem;

.tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 0px solid grey;
  }
table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid grey;
    
    
    tr {
    :last-child {
        td {
        border-bottom: 0;
        }
    }
    }

    th{
      background-color:none;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid grey;
      border-right: 1px solid grey;
      color: #343a40;

    }
    td {
    color: #343a40;;
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;

    :last-child {
        border-right: 9;
        color:#343a40;
    }
}
.pagination {
    padding: 6px;
  }
}
`





const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then(res => setData(res.data))
   }, []);

  
  return (
    <div>
    <div>
    <Router>
    <Header />

    <Switch>
          <Route path="/data">
            <Styles>
              <Table data={data} />
            </Styles>
          </Route>
          <Route path="/roster">
            <Roster />
          </Route>
          <Route path="/">
          
          </Route>
        </Switch>
    </Router>


    </div>
    </div>
     
  )

}


export default App;