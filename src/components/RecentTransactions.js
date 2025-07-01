import React from 'react';
import { Link } from 'react-router-dom';

const RecentTransactions = () => {
  const transactions = [
    {
      icon: '🛒',
      description: 'Shopping',
      date: '17th Feb 2025',
      amount: '-$430',
      color: 'text-red-500',
    },
    {
      icon: '✈️',
      description: 'Travel',
      date: '13th Feb 2025',
      amount: '-$670',
      color: 'text-red-500',
    },
    {
      icon: '💰',
      description: 'Salary',
      date: '12th Feb 2025',
      amount: '+$1200',
      color: 'text-green-500',
    },
    {
      icon: '💡',
      description: 'Electricity Bill',
      date: '11th Feb 2025',
      amount: '-$200',
      color: 'text-red-500',
    },
    {
      icon: '🏦',
      description: 'Loan Repayment',
      date: '10th Feb 2025',
      amount: '-$600',
      color: 'text-red-500',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
        <Link to="/transactions" className="text-blue-500 hover:text-blue-700 text-sm font-medium">
          See All →
        </Link>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{transaction.icon}</span>
              <div>
                <p className="text-gray-900 font-medium">{transaction.description}</p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className={`${transaction.color} font-semibold`}>{transaction.amount}</p>
              {/* Action icons */}
              <button title="Edit" className="text-blue-500 hover:text-blue-700 text-xl">✏</button>
              <button title="Delete" className="text-red-500 hover:text-red-700 text-xl">🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
