import './Expensedate.css'
// import {useState} from 'react'



function Expensedate(props) {

    let year=props.date.getFullYear()
    let day=props.date.toLocaleString("en-US",{day:'2-digit'})
    let month=props.date.toLocaleString("en-US",{month:"long"})

    // const[mth,setmth]= useState()
    // let update=()=>{
    //   setmth("month updated")
    //   console.log(month);
    // }

    
  return (   
     <div className='expensedate'>

  <div >
        <p>{month}</p>
        <p>{day}</p>
        <p>{year}</p>
        </div>
        <div>
        {/* <input type='button' value='CLICK' className='btn-month' onClick={update}/> */}
        

  </div>
        
    </div>

  );
}

export default Expensedate;
