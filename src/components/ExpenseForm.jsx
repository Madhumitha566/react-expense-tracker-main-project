//Adding Expenses container

import { useState } from "react";
import { CATEGORIES } from "../hooks/useExpenses";

export default function ExpenseForm({AddExpenses}){

 //states for each input handling

    const[amount,setAmount]=useState('')
    const[category,setCategory]=useState(CATEGORIES[0])
    const[date,setDate]=useState(new Date().toISOString().slice(0, 10))
    const[note,setNote]=useState('')

    //for new expenses 

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!amount||amount<=0) return
        const newExpenses={
            id:Date.now(),
            amount:parseFloat(amount),
            date,
            category,
            note,
        }
        AddExpenses(newExpenses)

        //Reset form
        setAmount('')
        setNote('')
    }
     //{amount,note,category,date,submit button}
    return(
        <div className="  bg-white  px-10 py-10 rounded-lg shadow-lg">

         <form onSubmit={handleSubmit} className="flex flex-col gap-8 ">
             
             <h2 className="text-indigo-500 text-2xl text-center font-semibold ">Add New Expenses</h2>
             
             <input type="number" value={amount} placeholder="Amount(e.g.,25.56)" onChange={(e)=>setAmount(e.target.value)} required className="border-2 border-[#ccc] border-solid rounded-md  w-full py-3 px-5 text-lg lg:w-96"/>

              <select value={category} onChange={(e)=>setCategory(e.target.value)} className="border-2 border-[#ccc] border-solid rounded-md   py-3 px-2 text-lg w-full lg:w-96">
                {CATEGORIES.map(cat=>(
                    <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

             <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} required className="border-2 border-[#ccc] border-solid rounded-md   py-3 px-2 text-lg w-full lg:w-96"/>

             <input type="text" value={note} placeholder="notes (optional)" onChange={(e)=>setNote(e.target.value)} className="border-2 border-[#ccc] border-solid rounded-md   py-3 px-2 text-lg w-full lg:w-96"/>

             <button type="submit" className="rounded-md  py-3 bg-teal-500 text-white font-semibold text-lg hover:shadow-lg shadow-teal-500/50 w-full ">Add Expense</button>

        </form>
        </div>
    )
}