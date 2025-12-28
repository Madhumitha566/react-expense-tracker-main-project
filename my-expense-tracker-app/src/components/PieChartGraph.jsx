import { CalculatedData } from "../Chart/datachart"
import { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer,Legend } from 'recharts';
import { useIsLargeScreen } from "../Chart/useIsLargeScreen";
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#ed52d1ff']

export default function PieChartGraph({ expenses }) {
   
    const { chartData, categoryMap, totalExpense } = useMemo(() =>
        CalculatedData(expenses), [expenses]
    );

     const isLargeScreen = useIsLargeScreen(); // Check if screen is 1024px

    // Define the responsive radius values
    const chartRadius = isLargeScreen ? 150 : 80;

      const chartContent = (
        // Flex container to hold the chart area and the breakdown list side-by-side
        <div className=" flex flex-col gap-10 lg:flex-row lg:gap-12 lg:justify-between lg:flex-row-reverse  w-full lg:flex-nowrap">
            
            {/* Chart Area */}
            <div className="  bg-white rounded-lg shadow-lg px-8 pb-10 ">
                <h3 className="text-center text-indigo-500 text-2xl pt-5 font-semibold ">Spending Expenses</h3>
                <p className="text-center text-pink-800 text-lg p-5 font-semibold ">Total Expenses: ${totalExpense.toFixed(2)}</p>

                {/* Container for Responsive Chart */}
                <div className=" lg:w-[800px] h-[420px] lg:p-3 border border-gray-300 m-2.5">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart >
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={chartRadius}
                                fill="#8884d8"
                                labelLine={false}
                                // label prop can show name and percentage on slices
                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Amount']} />
                            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Category Breakdown List */}
            <div className="bg-white rounded-lg shadow-lg px-15">
                <h4 className="text-center text-indigo-500 text-2xl pt-5 font-semibold">Category Breakdown</h4>
                <div className="max-h-125 overflow-y-auto">
                 <ul className="divide-y divide-gray-100">
                    {Object.entries(categoryMap)
                        .filter(([, amount]) => amount > 0)
                        .map(([category, amount], index) => ( 
                            <li key={category} className="px-20">
                                
                                <div className="flex items-center mt-10 text-gray-800 text-sm">
                                    <span 
                                        className="w-3 h-3 rounded-full" 
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    ></span>
                                    <span className="font-bold text-xl pl-3">{category}</span>
                                </div>

                              
                                <div className="flex mt-5 gap-8 pb-2">
                                    <span className="text-lg text-teal-600 font-semibold">${amount.toFixed(2)}</span>
                                    <span className="text-lg text-purple-500 font-semibold"> ({((amount / totalExpense) * 100).toFixed(2)}%)</span>
                                </div>
                            </li>
                        ))}
                 </ul>
                </div>
            </div>
        </div>
    );

    // 3. Render the component with a clear conditional structure
    return (
        <div className="m-15 lg:mt-12">
            {/* The main outer wrapper with a clean background */}
            <div className=" lg:p-4"> 
                {/* Conditional rendering based on totalExpense */}
                {totalExpense > 0 ? (
                    chartContent
                ) : (
                    <p className="text-xl text-center text-gray-500 font-bold">
                        Start Tracking Expenses to see the Chart!
                    </p>
                )}
            </div>
        </div>
    )
}