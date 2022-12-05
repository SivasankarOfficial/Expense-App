// import { useState } from "react";

const ExpenseFilter=(props)=>{


    // const [year,setYear]=useState("2020")
    // function yr(e){
    //     setYear(e.target.value)
    //     console.log(e.target.value);
    //     console.log(year);
    // }




    return(
        <div className="filter">
            <h4 style={{color:'white'}}>FilterByYear</h4>
            <select value={props.year} onChange={props.yr}> 
            <option value='selectYear'>SelectYear</option>
            <option value='2019'> 2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            </select>
           
        </div>
    )
}
export default ExpenseFilter;