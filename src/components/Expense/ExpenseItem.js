
import Expensedate from './Expensedate';
import './ExpenseItem.css';
// import React, { useState } from 'react';
import Card from '../UI/card';


function Expenseitem(props) {
  
const arr=props.arrayItem

  


// const del=props.del(arr.id)

  
//   const [first, setfirst] = useState()
  
//   function (){
    
//     setfirst("Updated")
//     console.log(arr.bank);
// }
return (
    <div className="expenseitem">
      <Card>
     
      <Expensedate date={arr.date}/>
      <p className='p2'>{arr.bank}</p>
      <p className='p3'>{arr.expense}</p>
      <button id='btn-class' onClick={()=>props.del(arr.id)}>Delete</button>
      
      </Card>
{/* 
      <p className='p1'>{date}</p>
      <p className='p2'>{bank}</p>
      <p className='p3'>{expense}</p> */}
      {/* <p className='p1'>{arr.date}</p>  */}
      
      {/* <input type='button' value="click" className='btn' onClick={update}/> */}
</div>
  );
}
export default Expenseitem;
