import './ExpenseForm.css';
import { useState } from 'react';


const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function tit(e) 
    {
        setTitle(e.target.value)
       
    }
    function amt(e) 
    {
        setAmount(e.target.value)
    }
function dat(e) 
    {
        setDate(e.target.value)
    }
    function Submit(e) 
    {
        e.preventDefault();
        
        let object={
            id:Math.floor(Math.random()*100),
            bank:title,
            expense:amount,
            date:new Date(date)
        }
        // console.log(object);
        props.child(object)
       
             
        setTitle('')
        setAmount('')
        setDate('')
        props.ShowButton()
    }
    // const [Form,setForm]=useState(true)
   
return (
        <div className='formdiv'>
            <form onSubmit={Submit} >
           
                <div>
                    <label >Title</label>
                </div>
                <div>
                    <input type='text' className='intitle' placeholder='Title' value={title} onChange={tit}></input>
                </div>
                <div>
                    <label >Amount</label>
                </div>
                <div>
                    <input type='number' className='in' placeholder='Amount' value={amount} onChange={amt}></input>
                </div>
                <div>
                    <label >Date</label>
                </div>
                <div>
                    <input type='date' className='intitle' value={date} onChange={dat}></input>
                </div>
                <div>
                    <input type='submit' value='submit' className="submit"  ></input>
                </div>
                <div id='butn'>
                    <input type='button' onClick={props.ShowButton} className="submit" value='cancel'/>
                </div>

            </form>
            
            {/* <input type='button' className='frm-btn' onClick={setForm(false)}>Form</input> */}


        </div>
        )
}
export default ExpenseForm;