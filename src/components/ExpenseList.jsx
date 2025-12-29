import  { useState, useMemo } from 'react';
import Filters from './Filters'
import ExpenseItem from './ExpenseItem'
export default function ExpenseList({ expenses, deleteExpenses }) {
  
  //combine the Entry Data
  const[filter,setFilter]=useState({
    category:'',
    startDate:'',
    sortBy:'recent',
  })
  const filterandsorting=useMemo(()=>{
     let list=[...expenses]
     if(filter.category){
      list=list.filter(e=>e.category===filter.category)
     }
     if(filter.startDate){
      list=list.filter(e=>e.date>=filter.startDate)
     }
     list.sort((a,b)=>{
      if(filter.sortBy==='highest'){
        return b.amount-a.amount
      }else{
        return b.id-a.id
      }
     })
    return list
  },[expenses,filter]) 

  return(
    <div className=' bg-white rounded-lg  flex flex-col shadow-lg   px-10 py-10'>
      <Filters filter={filter} setFilter={setFilter}/>
      <h3 className='text-center text-indigo-500 text-2xl font-semibold  '>Expenses History ({filterandsorting.length} entries)</h3>
      {filterandsorting.length>0?(
        <div className='max-h-70 overflow-y-auto'>
         <ul className='flex flex-col mt-5 divide-y divide-gray-100'>
          {filterandsorting.map(expense=>(
            <ExpenseItem key={expense.id} expense={expense} onDelete={deleteExpenses}/>
          ))}
      </ul>
      </div>
     ):(<p className='text-center mt-10 text-gray-500 text-lg'>No Expense found</p>)
}
    </div>
  )
}