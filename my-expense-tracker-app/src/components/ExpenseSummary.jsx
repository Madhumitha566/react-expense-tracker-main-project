const ExpenseSummary = ({ expenses, categories }) => {
  
  // 1. Calculate Total Spent
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // 2. Calculate Category Totals
  const categoryTotals = categories.reduce((acc, category) => {
    const total = expenses
      .filter(e => e.category === category)
      .reduce((sum, e) => sum + e.amount, 0);
    acc[category] = total;
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      <div className="p-4 bg-indigo-100 rounded-lg border-l-4 border-indigo-600">
        <p className="text-xl font-medium text-indigo-900">Total Spent:</p>
        <p className="text-3xl font-extrabold text-indigo-700">${totalSpent.toFixed(2)}</p>
      </div>

      <h3 className="text-lg font-semibold mt-4 border-t pt-2 text-center text-indigo-500">Category Breakdown</h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category} className="flex justify-between items-center text-md">
            <span className="font-medium text-gray-700">{category}:</span>
            <span className="font-bold text-red-600">${categoryTotals[category].toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;