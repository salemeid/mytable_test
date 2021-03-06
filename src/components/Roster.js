import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Roster.css';

const Roster = () => {

  const [data, setData] = useState([]);
  const [nama, setNama] = useState('');
  const [payrollNumber, setPayrollNumber] = useState('');
  
  useEffect(() => {
    axios
      .post('http://localhost:3001/roster',{prn: payrollNumber})
      .then(res => setData(res.data))
   }, [payrollNumber]);

   const handleSubmit = (e) => {
      e.preventDefault();
      setPayrollNumber(nama);
   }; 

  return (
    
    <div >
      <h1>Hello {payrollNumber}</h1>
      <form onSubmit={handleSubmit} >
        <label>
          PRN:
          <input type="text" name="nama" onChange= {e => setNama(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>CODE</th>
            <th>START</th>
            <th>FINISH</th>
            <th>GROUP</th>
            <th>DEPARTMENT</th>
          </tr>
        </thead>
        <tbody>
          {data.map(results => {
            return (
              <tr className={results.code === "R" && 'RestDay'}>
                <td>{results.dte}</td>
                <td >{results.code}</td>
                <td>{results.strt}</td>
                <td>{results.fnsh}</td>
                <td>{results.grp}</td>
                <td>{results.dep}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Roster;
