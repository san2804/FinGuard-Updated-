import React from 'react';
import Navbar from './Navbar';

const BudgetPage = () => {
  const budgetUsed = 1200;
  const budgetTotal = 1500;
  const savings = 500;
  const savingsGoal = 1000;

  const categories = [
    { name: 'Dining', spent: 200, limit: 250, icon: '🍽️', bar: 'orange' },
    { name: 'Groceries', spent: 380, limit: 400, icon: '🛒', bar: 'red' },
    { name: 'Transportation', spent: 150, limit: 200, icon: '🚗', bar: 'orange' },
    { name: 'Entertainment', spent: 120, limit: 150, icon: '🎮', bar: 'orange' },
    { name: 'Utilities', spent: 280, limit: 300, icon: '⚡', bar: 'red' },
    { name: 'Shopping', spent: 30, limit: 200, icon: '🛍️', bar: 'green' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Title and Subtitle */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Budget Management</h1>
          <p className="text-sm text-gray-500">Take control of your finances with AI-powered insights</p>
          <p className="text-xs text-right text-gray-400 mt-2">📊 Updated 2 min ago</p>
        </div>

        {/* Budget Overview */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Monthly Budget Overview</h2>
              <p className="text-sm text-gray-500">Track your spending and stay on target</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">⚙️ Adjust Budget</button>
              <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100">+ Add Category</button>
            </div>
          </div>

          <div className="text-sm font-medium mb-2">
            LKR{budgetUsed} / LKR{budgetTotal}{' '}
            <span className="text-green-600 float-right">LKR{budgetTotal - budgetUsed} remaining</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-orange-500 h-3 rounded-full" style={{ width: `LKR{(budgetUsed / budgetTotal) * 100}%` }} />
          </div>

          {/* Savings Goal */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-sm font-medium text-gray-700 mb-1">💙 Savings Goal</h3>
            <p className="text-blue-700 font-bold text-base">LKR {savings}</p>
            <p className="text-xs text-gray-500 mb-2">of LKR {savingsGoal} saved for Sri Lanka trip</p>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(savings / savingsGoal) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-700">Category Breakdown</h3>
            <button className="bg-violet-600 text-white px-4 py-1.5 rounded text-sm hover:bg-violet-700">⚡ AI Optimize</button>
          </div>

          {categories.map((cat, i) => {
            const percent = (cat.spent / cat.limit) * 100;
            const barColor = {
              red: 'bg-red-500',
              orange: 'bg-orange-500',
              green: 'bg-green-500',
            }[cat.bar];

            return (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <span>{cat.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    LKR{cat.spent} / LKR{cat.limit} • LKR{cat.limit - cat.spent} remaining
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${barColor} h-2 rounded-full`} style={{ width: `${percent}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Alerts & Notifications</h3>

          <div className="bg-orange-100 border-l-4 border-orange-400 p-3 text-sm text-orange-800 rounded">
            ⚠️ You're spending 2x faster on dining than last month!
            <p className="text-xs text-gray-500">Category: Dining</p>
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-400 p-3 text-sm text-blue-800 rounded">
            ✅ Great job staying under budget on Transportation!
            <p className="text-xs text-gray-500">Category: Transportation</p>
          </div>

          {/* Notification Settings */}
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Notification Settings</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked readOnly /> Alert at 80% of budget
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked readOnly /> Weekly spending summaries
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> AI optimization suggestions
              </label>
            </div>
          </div>
        </div>

        {/* Historical Trends Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Historical Trends</h3>
          <p className="text-xs text-gray-500 mb-4">Compare your spending patterns over time</p>
          <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-gray-400">
            {/* Replace with chart later */}
            Chart placeholder
          </div>

          {/* View Toggle */}
          <div className="mt-4 flex gap-2 text-sm">
            <button className="px-3 py-1 rounded bg-blue-600 text-white">Monthly</button>
            <button className="px-3 py-1 rounded hover:bg-gray-200">Quarterly</button>
            <button className="px-3 py-1 rounded hover:bg-gray-200">Yearly</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;
