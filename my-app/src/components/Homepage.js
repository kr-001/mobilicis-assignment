// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import "./HomepageStyle.css"
export default function Homepage() {
    const [data , setData] = useState([]);
    const [count , setCount] = useState(0);
    const getInfo = async () =>{
             
        let result = await fetch("http://localhost:5000/data");
        result = await result.json();
        setData(result);
        let ans = 0;
        for( let i in result){
          if(result.hasOwnProperty(i)){
             ans++;
          }
        }
        setCount(ans);
        console.log(ans);
    };
    console.log(data);



    useEffect(() =>{
        getInfo();
    },[])


  return (
    <>
   <u><h1 style={{textAlign: 'center'}}>Customer Information - All Customers</h1></u> 
     
     <div className='container'>
     <h3 style={{textAlign : 'left'}}>Total Entries : {count}</h3>
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
       <td style={{fontSize:'auto'}}>{obj.quote}</td>
       <td style={{fontSize:'auto'}}>$ {obj.phone_price}</td>
       </tr>
      )}
     </table>
     </div>

    </>
  );
}
