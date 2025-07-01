import React from 'react';
import { Link } from 'react-router-dom';

// Dummy data for Recent Income Sources
const recentIncomeSources = [
  {
    icon: '💰',
    description: 'Salary',
    date: '12th Jun 2025',
    amount: '+$1200',
    color: 'text-green-500',
  },
  {
    icon: '💼',
    description: 'Freelance Project',
    date: '9th Jun 2025',
    amount: '+$850',
    color: 'text-green-500',
  },
  {
    icon: '🏠',
    description: 'Rental Income',
    date: '5th Jun 2025',
    amount: '+$300',
    color: 'text-green-500',
  },
];

const RecentIncomeSources = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Income Sources</h2>
        <Link to="/income-sources" className="text-blue-500 hover:text-blue-700 text-sm font-medium">
          See All →
        </Link>
      </div>
      <div className="space-y-4">
        {recentIncomeSources.map((income, index) => (
          <div key={index} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{income.icon}</span>
              <div>
                <p className="text-gray-900 font-medium">{income.description}</p>
                <p className="text-gray-500 text-sm">{income.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className={`${income.color} font-semibold`}>{income.amount}</p>
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

export default RecentIncomeSources;
