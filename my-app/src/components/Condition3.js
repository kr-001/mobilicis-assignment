import React, { useEffect, useState } from 'react';

export default function Condition3() {
    const [data , setData] = useState([]);
    const [count , setCount] = useState(0);
    
    const getData = async () =>{
        let result = await fetch("http://localhost:5000/condition3")
        result = await result.json();
        setData(result);
        let ans = 0;
        for( let i in result){
          if(result.hasOwnProperty(i)){
             ans++;
          }
        }
        setCount(ans);
    }
 useEffect(()=>{
  getData();
 },[])

  return (
    <>
            <u> <h1 style={{textAlign: 'center'}}>Customer Information</h1></u>
     <div className='container'>
     <div className='row'>
      <div className='col'>
      <h3 style={{textAlign: 'left'}}>Last Name : Starts With "M"</h3>
      <h3 style={{textAlign: 'left'}}>Quote length : Greater than 15</h3>
      <h3 style={{textAlign: 'left'}}>Email includes : Last Name</h3>
      </div>
      <div className='col' style={{textAlign:'right'}}>
        <h4>Total Entries : {count}</h4>
      </div>
     </div>
     <table className='customer'>
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
      {data.map((obj,index)=>
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
      )}
     </table>
     </div>
    </>
  );
}
