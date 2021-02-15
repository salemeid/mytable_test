import React from 'react';
import './App.css';
import Table from './components/Table';
import data from './list.json';
import styled from 'styled-components';


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
      color:white;

    }
    td {
    color:white;
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;

    :last-child {
        border-right: 9;
        color:white;
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

 
  


  const columns = React.useMemo(

    () => [ 
      {
        Header: 'PRN', 
        accessor: 'PRN', // accessor is the "key" in the data
      },
      {
        Header: 'NAME',
        accessor: 'NAME',
      },
      {
        Header: 'FUNCTION',
        accessor: 'FUNCTION',
      },
      {
        Header: 'DEPARTMENT / SECTION',
        accessor: 'DEPARTMENT / SECTION',
      },
      {
        Header: 'OPERATIONS SIDE',
        accessor: 'OPERATIONS SIDE',
      },
      {
        Header: 'DEMAND MNGR.',
        accessor: 'DEMAND MNGR.',
      },
      {
        Header: 'WFP SCHEDULER',
        accessor: 'WFP SCHEDULER',
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

    <Styles>
      <Table columns={columns} data={data} />
    </Styles>

     
  )

}


export default App;
// useEffect(() => {
//       const jsonFile = csv2json(csvFile, {parseNumbers: true});
//       setData(jsonFile);
//     },[]);

  // const data = React.useMemo(

  //   () => [
 
  //     {
  //       "PRN": 15010431,
  //       "DATE": 20210117,
  //       "CODE": "C30",
  //       "FROM": 2300,
  //       "TO": "0700+1",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15013651,
  //       "DATE": 20210110,
  //       "CODE": "A10",
  //       "FROM": 700,
  //       "TO": 1500,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15020631,
  //       "DATE": 20210101,
  //       "CODE": "A9",
  //       "FROM": 700,
  //       "TO": 1900,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15016548,
  //       "DATE": 20210106,
  //       "CODE": "R",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15018926,
  //       "DATE": 20210113,
  //       "CODE": "B25",
  //       "FROM": 1600,
  //       "TO": "0000+1",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15014664,
  //       "DATE": 20210129,
  //       "CODE": "R",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15018136,
  //       "DATE": 20210131,
  //       "CODE": "R",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15026457,
  //       "DATE": 20210106,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15002979,
  //       "DATE": 20210110,
  //       "CODE": "A5",
  //       "FROM": 600,
  //       "TO": 1400,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15009254,
  //       "DATE": 20210121,
  //       "CODE": "C30",
  //       "FROM": 2300,
  //       "TO": "0700+1",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15024747,
  //       "DATE": 20210130,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15023278,
  //       "DATE": 20210115,
  //       "CODE": "A9",
  //       "FROM": 700,
  //       "TO": 1900,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15014706,
  //       "DATE": 20210113,
  //       "CODE": "A13",
  //       "FROM": 800,
  //       "TO": 1900,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15024033,
  //       "DATE": 20210111,
  //       "CODE": "A15",
  //       "FROM": 800,
  //       "TO": 1600,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15014734,
  //       "DATE": 20210124,
  //       "CODE": "C9",
  //       "FROM": 1900,
  //       "TO": "0700+1",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15002880,
  //       "DATE": 20210103,
  //       "CODE": "R",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15014422,
  //       "DATE": 20210104,
  //       "CODE": "A9",
  //       "FROM": 700,
  //       "TO": 1900,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15012978,
  //       "DATE": 20210122,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15018136,
  //       "DATE": 20210109,
  //       "CODE": "A8",
  //       "FROM": 700,
  //       "TO": 1800,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15000346,
  //       "DATE": 20210105,
  //       "CODE": "A15",
  //       "FROM": 800,
  //       "TO": 1600,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15010431,
  //       "DATE": 20210109,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15012427,
  //       "DATE": 20210115,
  //       "CODE": "A5",
  //       "FROM": 600,
  //       "TO": 1400,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15014678,
  //       "DATE": 20210111,
  //       "CODE": "A13",
  //       "FROM": 800,
  //       "TO": 1900,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15024405,
  //       "DATE": 20210110,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15026457,
  //       "DATE": 20210125,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15012819,
  //       "DATE": 20210122,
  //       "CODE": "A10",
  //       "FROM": 700,
  //       "TO": 1500,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15014629,
  //       "DATE": 20210113,
  //       "CODE": "C14",
  //       "FROM": 2000,
  //       "TO": "0800+1",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15021341,
  //       "DATE": 20210126,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15010124,
  //       "DATE": 20210130,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15019627,
  //       "DATE": 20210127,
  //       "CODE": "B15",
  //       "FROM": 1400,
  //       "TO": 2200,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15025408,
  //       "DATE": 20210120,
  //       "CODE": "R",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15017183,
  //       "DATE": 20210117,
  //       "CODE": "A14",
  //       "FROM": 800,
  //       "TO": 2000,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15024395,
  //       "DATE": 20210123,
  //       "CODE": "V",
  //       "FROM": "",
  //       "TO": "",
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15014546,
  //       "DATE": 20210110,
  //       "CODE": "A9",
  //       "FROM": 700,
  //       "TO": 1900,
  //       "GRP": "BAG_OPS"
  //     },
  //     {
  //       "PRN": 15003305,
  //       "DATE": 20210112,
  //       "CODE": "A9",
  //       "FROM": 700,
  //       "TO": 1900,
  //       "GRP": "BAG_OPS"
  //     }

  //   ],
 
  //   []
 
  // )
