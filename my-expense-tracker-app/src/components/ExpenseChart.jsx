// src/components/ExpenseChart.jsx (Using Recharts)

import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = [
  '#FF6384', 
  '#36A2EB', 
  '#4BC0C0', 
  '#9966FF', 
  '#FF9F40', 
  
  '#C9CBCE',
];

const ExpenseChart = ({ expenses, categories }) => {

    
    const rechartsData = useMemo(() => {
        
        const categoryTotals = categories.reduce((acc, category) => {
            const total = expenses
                .filter(e => e.category === category)
                .reduce((sum, e) => sum + e.amount, 0);
            
            // Only include categories with spending > 0
            if (total > 0) {
                acc.push({ 
                    name: category, 
                    value: total 
                });
            }
            return acc;
        }, []);

        return categoryTotals;
    }, [expenses, categories]);

    // Calculate total expense for percentage tooltip/label calculation
    const totalExpense = rechartsData.reduce((sum, entry) => sum + entry.value, 0);

    // --- Custom Tooltip Component (Optional, but highly recommended for formatting) ---
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        const dataEntry = payload[0].payload;
        const value = dataEntry.value;
        const percentage = totalExpense > 0 ? (value / totalExpense) * 100 : 0;
        
        return (
          <div className="bg-white p-2 border border-gray-300 shadow-md">
            <p className="font-semibold text-gray-800">{dataEntry.name}</p>
            <p className="text-red-600">Amount: ${value.toFixed(2)}</p>
            <p className="text-indigo-600">Percentage: {percentage.toFixed(1)}%</p>
          </div>
        );
      }
      return null;
    };
    
    // Check if there is data to display
    if (totalExpense === 0) {
        return <p className="text-center text-gray-500 p-4">Add expenses to view the chart.</p>;
    }
    
    // --- Render Recharts PieChart ---
    return (
        // Chart container (adjust height here, e.g., h-[300px])
        <div className="w-full h-[350px]"> 
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={rechartsData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%" 
                        cy="50%" 
                        
                       
                        outerRadius={120} t
                        
                        fill="#8884d8"
                        
                        labelLine={false}
                    >
                        {rechartsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    
                    
                    <Tooltip content={<CustomTooltip />} />
                    
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
                
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseChart;