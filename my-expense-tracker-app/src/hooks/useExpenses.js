import { useEffect,useState } from "react"

//key for storage value
const STORAGE_DATA='Smart-Expenses-Tracker'


//custom hook for getting data from localStorage or empty array

const loadExpenses=()=>{
    try{
       const json=localStorage.getItem(STORAGE_DATA);
       return json?JSON.parse(json):[];
      }catch(error){
       console.error("could not loading",error);
       return []
    }
}

//category for expenses

export const CATEGORIES=['Food', 'Travel','Bills', 'Entertainment','Grocery','Others']

//function for store the data into the localstorage and  adding the expense and delete the expense

export function useExpense(){

   const[expenses,setExpenses]=useState(loadExpenses)

  useEffect(()=>{
    localStorage.setItem(STORAGE_DATA,JSON.stringify(expenses))
  },[expenses])
   
    
  const AddExpenses=(newExpenses)=>{
    setExpenses(prev=>[newExpenses,...prev])
  }
  const deleteExpenses=(id)=>{
    setExpenses(prev=>prev.filter(expense=>expense.id!==id))
  }
  
  return{
    expenses,
    AddExpenses,
    deleteExpenses,
    categories:CATEGORIES,
  }
}