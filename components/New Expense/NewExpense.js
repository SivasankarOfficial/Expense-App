import { useState } from "react";
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {
    let parent=(object)=>{
        props.child2(object)
}
const [appear,setAppear]=useState(true)
function ShowForm(){
    setAppear(false)
}
function ShowButton(){
    setAppear(true)
}
    return (
        <div id="nwEx">

       {appear && <button onClick={ShowForm} id='btn-newex'>Open ExpenseForm</button>}
        {!appear && <ExpenseForm child={parent}  ShowButton={ShowButton}  />}
        </div>
    )
}
export default NewExpense;