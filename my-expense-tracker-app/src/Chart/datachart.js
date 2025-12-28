import { CATEGORIES } from "../hooks/useExpenses"

 //category breakdown

export const CalculatedData=(expenses)=>{
   
    const categoryMap={}
    let totalExpense=0
  
    CATEGORIES.forEach(cat=>categoryMap[cat]=0)

    expenses.forEach(expense => {
    // Ensure the category exists in the map
    const category = expense.category || 'Others';
    if (categoryMap[category] === undefined) {
        categoryMap[category] = 0;
    }
    
    categoryMap[category] += expense.amount;
    totalExpense += expense.amount;
  });
    const chartData = Object.keys(categoryMap).map(name => ({
        name,
        value: categoryMap[name],
      })).filter(item => item.value > 0);

  return{chartData,totalExpense,categoryMap}

}