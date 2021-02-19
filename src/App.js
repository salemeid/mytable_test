import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
// import data from './list.json';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';


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

  // const [data, setData] = useState([]);
  // const [data, setData] = useState([]);

  // const getData=()=>{
  //   fetch('./list.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'text'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setData(myJson)
  //     });
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then(res => setData(res.data))
   }, []);

  


  const columns = React.useMemo(

    () => [ 
      {
        Header: 'PRN', 
        accessor: 'prn', // accessor is the "key" in the data
      },
      {
        Header: 'NAME',
        accessor: 'stff_name',
      },
      {
        Header: 'FUNCTION',
        accessor: 'job_func',
      },
      {
        Header: 'DEPARTMENT / SECTION',
        accessor: 'dept_sect',
      },
      {
        Header: 'OPERATIONS SIDE',
        accessor: 'ops_side',
      },
      {
        Header: 'DEMAND MNGR.',
        accessor: 'demand_mngr',
      },
      {
        Header: 'WFP SCHEDULER',
        accessor: 'wfp_scheduler',
      },
    ],
    []
  )

  // useEffect(()=>{
  //   getData()
  // },[])

  // const listItems = data.map(item => <tr><td>{item.prn}</td><td>{item.name}</td></tr>)

  return (
    // <ul>{listItems}</ul>
    // <table><th>PRN</th><th>Name</th>{listItems}</table>
    <div>
    <div>
    <Header />
    </div>
    <div>
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
    </div>
    </div>
     
  )

}


export default App;