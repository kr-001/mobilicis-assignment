import React, { useEffect, useState } from 'react';

export default function Condition1(props) {
    const[data , setData] = useState([]);
    useEffect(()=>{
        getData();
    },[]);
    const [count , setCount] = useState(0);
    const getData = async () =>{
        let filteredData = await fetch("http://localhost:5000/condition1")
        filteredData = await filteredData.json();
        setData(filteredData);
        let ans = 0;
        for( let i in filteredData){
          if(filteredData.hasOwnProperty(i)){
             ans++;
          }
        }
        setCount(ans);
    }
  console.log(data);

  return (
    <>
      <u>
        {" "}
        <h1 style={{ textAlign: "center" }}>Customer Information</h1>
      </u>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 style={{ textAlign: "left" }}>Income: Less Than $5</h3>
            <h3 style={{ textAlign: "left" }}>Car Brand : BMW or Mercedes</h3>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <h4>Total Entries : {count}</h4>
          </div>
        </div>
        <table className="customer">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
          {data.map((obj, index) => (
            <tr>
              <td>{obj.id}</td>
              <td>{obj.first_name}</td>
              <td>{obj.last_name}</td>
              <td>{obj.email}</td>
              <td>{obj.gender}</td>
              <td>{obj.income}</td>
              <td>{obj.city}</td>
              <td>{obj.car}</td>
              <td>{obj.quote}</td>
              <td>$ {obj.phone_price}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
