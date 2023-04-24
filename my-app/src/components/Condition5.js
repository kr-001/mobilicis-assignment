import React , {useState , useEffect} from 'react';

export default function Condition5() {
    const [data , setData] = useState([]);
    const [count , setCount] = useState(0);
    const getData = async () =>{
        let result = await fetch("http://localhost:5000/condition5")
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
    console.log(data);

 useEffect(()=>{
    getData();
 },[])
  return (
    <>
      <u> <h1 style={{textAlign: 'center'}}>Customer Information</h1></u>
     <div className='container'>
     <div className='row'>
      <div className='col'>
      <h3 style={{textAlign: 'left'}}>Top 10 Cities with highest number of "users" and their "average income". </h3>
      </div>
      <div className='col' style={{textAlign : 'right'}}>
        <h4>Total Entries : {count}</h4>
      </div>
     </div>
     <table className='customer'>
      <tr>
        <th>City</th>
        <th>Users</th>
        <th>Average Income</th>
        
       
        
      </tr>
      {data.map((obj,index)=>
        <tr key={index}>
        <td style={{textAlign : 'center'}}>{obj._id}</td>
       <td style={{textAlign : 'center'}}>{obj.count}</td>
       <td style={{textAlign : 'center'}}> $ {obj.average_income['$numberDecimal'].toLocaleString()}</td>
       </tr>
      )}
     </table>
     </div>
    </>
  );
}
