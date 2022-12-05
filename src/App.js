
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/New Expense/NewExpense';
import { useState } from 'react'


function App(props) {
  const array = [
    {
      id:Math.floor(Math.random()*100),
      date: new Date(2021, 0, 21),
      bank: 'Homeloan',
      expense: '2000'
    },
    {
      id:Math.floor(Math.random()*100),
      date: new Date(2019, 5, 2),
      bank: 'BikeDue',
      expense: "1500",
    }
  ]
  const [form, setForm] = useState(array)
  let parent1 = (newobj) => {
    setForm((array) => {
      return [newobj, ...array]
    })
}

function del(id){
  setForm((form)=>{
    return form.filter((ar)=>ar.id!==id)
})
} 



  return (
    <div className="App">
      <div id='h2'><h2>Expense App</h2></div>
      <NewExpense child2={parent1} />
      <Expense app={form}  del={del} />
     

    </div>
  );
}

export default App;
