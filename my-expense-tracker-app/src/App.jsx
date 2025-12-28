import './App.css'
import { useExpense } from './hooks/useExpenses';
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList';
import PieChartGraph from './components/PieChartGraph';
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
              <PieChartGraph expenses={expenses}/>
             </section>
       </main>
       <footer><p className='text-md md:text-lg mt-10 bg-gray-400 text-center text-white lg:text-2xl p-5'>Optimize your budget and reach your goals faster with our smart tracking features</p></footer>
       </div>
     
    </>
  )
}


