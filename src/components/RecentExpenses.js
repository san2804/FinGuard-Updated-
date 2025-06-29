import React from 'react';

const recentExpenses = [
  {
    icon: '🛒',
    description: 'Groceries',
    date: '20th Jun 2025',
    amount: '- LKR 1500',
    color: 'text-red-500',
  },
  {
    icon: '💡',
    description: 'Electricity Bill',
    date: '18th Jun 2025',
    amount: '- LKR 600',
    color: 'text-red-500',
  },
  {
    icon: '🚗',
    description: 'Fuel',
    date: '17th Jun 2025',
    amount: '- LKR 450',
    color: 'text-red-500',
  },
  {
    icon: '🍽️',
    description: 'Dining Out',
    date: '16th Jun 2025',
    amount: '- LKR 750',
    color: 'text-red-500',
  },
  {
    icon: '📱',
    description: 'Phone Bill',
    date: '15th Jun 2025',
    amount: '- LKR 300',
    color: 'text-red-500',
  },
  {
    icon: '🏠',
    description: 'Rent',
    date: '1st Jun 2025',
    amount: '- LKR 8000',
    color: 'text-red-500',
  },
];

const RecentExpenses = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Expenses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {recentExpenses.map((expense, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="text-3xl">{expense.icon}</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">
                {expense.description}
              </div>
              <div className="text-xs text-gray-500">{expense.date}</div>
            </div>
            <div className={`text-sm font-semibold ${expense.color}`}>
              {expense.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentExpenses;
