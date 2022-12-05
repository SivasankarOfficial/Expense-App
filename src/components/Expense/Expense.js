import Expenseitem from './ExpenseItem';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from "react";

function Expense(props) 
{
 
    const array=props.app
    const [year,setYear]=useState('selectYear')
    function yr(e){
        setYear(e.target.value)
        console.log(e.target.value);
        // console.log(year);
    }
    const filterYear=array.filter((array)=>{
      // console.log(array.date.getFullYear().toString() === year);
      return array.date.getFullYear().toString() === year
     
})
return (
    <div className="expense">
      <ExpenseFilter year={year} yr={yr}/>

      {year==='selectYear'?(array.map((array,index)=>(<Expenseitem key={index} arrayItem={array} del={props.del}/>))):

     (filterYear.length===0?(<h1 id="black">No Expense Found</h1>) 
     
     :(filterYear.map((val,index) => (<Expenseitem key={index} arrayItem={val}/>))))

     
     
     }
     
      

      {/* <Expenseitem arr={array[0]}/>
      <Expenseitem arr={array[1]}/> */}
  </div>
)}
export default Expense;
