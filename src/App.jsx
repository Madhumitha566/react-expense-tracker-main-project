import './App.css'
import { CATEGORIES, useExpense } from './hooks/useExpenses';
import ExpenseForm from './components/ExpenseForm'
import ExpenseChart from './components/ExpenseChart';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseList from './components/ExpenseList'
export default function App() {
   const { expenses,AddExpenses,deleteExpenses } = useExpense();
  

  return (
    <>
      <div className='bg-[#F4F7F9]'>
      <header className='bg-blue-400 text-white text-center sticky'>
         <h1 className='text-[30px] md:text-[40px] font-semibold p-5'>  Smart Expense Tracker 💸</h1>
      </header>
      <main>
          <section className='flex flex-col gap-10 m-15 lg:flex-row justify-around mt-15 mb-10'>
            <ExpenseForm AddExpenses={AddExpenses}/>
            <ExpenseList expenses={expenses} deleteExpenses={deleteExpenses} />
           </section>
            <section>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 m-15">
              <div className="bg-white p-6 rounded-lg shadow-xl ">
                  <h2 className="text-2xl font-semibold mb-4 text-indigo-500  text-center pb-2">Spending Summary</h2>
                  <ExpenseSummary expenses={expenses} categories={CATEGORIES} />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-xl">
                  <h2 className="text-2xl font-semibold mb-4 text-indigo-500 text-center pb-2">Category Chart</h2>
                  <ExpenseChart expenses={expenses} categories={CATEGORIES} /> 
              </div>
          </div>
             </section>
       </main>
       <footer><p className='text-md md:text-lg mt-10 bg-gray-400 text-center text-white lg:text-2xl p-5'>Optimize your budget and reach your goals faster with our smart tracking features</p></footer>
       </div>
     
    </>
  )
}


