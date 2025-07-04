import React, { useState } from 'react';
import Navbar from './Navbar';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Edit3,
  Lightbulb,
  Target,
  AlertTriangle,
  CheckCircle,
  X,
  Settings,
  Plus,
  BarChart3,
  Zap,
} from 'lucide-react';

const BudgetPage = () => {
  const [isBudgetPopupOpen, setIsBudgetPopupOpen] = useState(false);
  const [budgetData, setBudgetData] = useState({
    title: '',
    category: '',
    type: '',
    amount: '',
    date: '',
    notes: '',
  });

  const openBudgetPopup = () => setIsBudgetPopupOpen(true);
  const closeBudgetPopup = () => setIsBudgetPopupOpen(false);

  const handleBudgetChange = (e) => {
    const { name, value } = e.target;
    setBudgetData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Budget:', budgetData);
    closeBudgetPopup();
  };

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Title */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 text-left mb-6">Budget Management</h1>
            <p className="text-sm text-gray-600">Take control of your finances with AI-powered insights</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BarChart3 className="w-4 h-4" />
            <span>Updated 2 min ago</span>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Budget Overview</h3>
              <p className="text-sm text-gray-600">Track your spending and stay on target</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={openBudgetPopup}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Settings className="w-4 h-4" /> Adjust Budget
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Savings Goal
              </button>
            </div>
          </div>

          <div className="text-sm font-medium mb-2">
            LKR{budgetUsed} / LKR{budgetTotal}{' '}
            <span className="text-green-600 float-right">LKR{budgetTotal - budgetUsed} remaining</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-orange-500 h-3 rounded-full" style={{ width: `${(budgetUsed / budgetTotal) * 100}%` }} />
          </div>

          {/* Savings */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-900">Savings Goal</span>
            </div>
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">Category Breakdown</h3>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2">
              <Zap className="w-4 h-4" /> AI Recommendations
            </button>
          </div>

          {categories.map((cat, i) => {
            const percent = (cat.spent / cat.limit) * 100;
            return (
              <div key={i} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{cat.name}</h4>
                      <p className="text-sm text-gray-500">
                        LKR{cat.spent} / LKR{cat.limit} • LKR{cat.limit - cat.spent} remaining
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {percent > 80 && (
                      <Lightbulb className="w-4 h-4 text-yellow-500 cursor-pointer" title="AI suggestion available" />
                    )}
                    <Edit3 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          percent <= 70 ? 'bg-green-500' : percent <= 90 ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min(percent, 100)}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{percent.toFixed(0)}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Alerts & Notifications</h3>

          <div className="bg-orange-100 border-l-4 border-orange-400 p-3 text-sm text-orange-800 rounded">
            ⚠️ You're spending 2x faster on dining than last month!
            <p className="text-xs text-gray-500">Category: Dining</p>
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-400 p-3 text-sm text-blue-800 rounded">
            ✅ Great job staying under budget on Transportation!
            <p className="text-xs text-gray-500">Category: Transportation</p>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Notification Settings</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm text-gray-700">Alert at 80% of budget</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm text-gray-700">Weekly spending summaries</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-700">AI optimization suggestions</span>
              </label>
            </div>
          </div>
        </div>

        {/* Historical Trends */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Historical Trends</h3>
          <p className="text-sm text-gray-600">Compare your spending patterns over time</p><br />
          <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-gray-400">Chart placeholder</div>
          <div className="mt-4 flex gap-2 text-sm">
            <button className="px-3 py-1 rounded bg-blue-600 text-white">Monthly</button>
            <button className="px-3 py-1 rounded hover:bg-gray-200">Quarterly</button>
            <button className="px-3 py-1 rounded hover:bg-gray-200">Yearly</button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isBudgetPopupOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] h-[600px] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Adjust Budget</h2>
              <button onClick={closeBudgetPopup} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                ×
              </button>
            </div>

            <form onSubmit={handleBudgetSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Title</label>
                <input
                  type="text"
                  name="title"
                  value={budgetData.title}
                  onChange={handleBudgetChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="e.g. Food Budget"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    value={budgetData.category}
                    onChange={handleBudgetChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Food">Food</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Housing">Housing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    name="type"
                    value={budgetData.type}
                    onChange={handleBudgetChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount (LKR)</label>
                <input
                  type="number"
                  name="amount"
                  value={budgetData.amount}
                  onChange={handleBudgetChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Effective Date</label>
                <input
                  type="date"
                  name="date"
                  value={budgetData.date}
                  onChange={handleBudgetChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <textarea
                  name="notes"
                  value={budgetData.notes}
                  onChange={handleBudgetChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Optional notes"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={closeBudgetPopup}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg"
                >
                  Update Budget
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetPage;
