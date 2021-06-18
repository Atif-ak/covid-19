import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [covidData, setCovidData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      // .then((res)=> res.json())
      .then((data) => setCovidData(data.data.statewise));
  }, []);
  let no = 1
  return (
    <div className="body">
      <h1 className="covid-heading">INDIA COVID 19 DASHBORD</h1>

      <Table responsive="sm">
    <thead>
      <tr>
        <th>Sr no</th>
        <th>STATE</th>
        <th>CONFIRMED</th>
        <th>RECOVERED</th>
        <th>DEATHS</th>
        <th>ACTIVE</th>
        <th>LAST UPDATED</th>
      </tr>
    </thead>
    <tbody>

    {
            covidData.map((data,ind)=>{
              return (
                <>
                 <tr key={ind}>
               <td>{no++}</td>
               <td>{data.state}</td>
               <td>{data.confirmed}</td>
               <td>{data.recovered}</td>
               <td>{data.deaths}</td>
               <td>{data.active}</td>
               <td>{data.lastupdatedtime}</td>
             </tr>
                </>
              )
            })
      
          }

    </tbody>
  </Table>


    
    </div>
  );

}

export default App;
