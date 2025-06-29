import React, { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import ExpenseChart from './ExpenseChart';
import Navbar from './Navbar';
import RecentExpenses from './RecentExpenses';

const ExpensePage = () => {
  const [isExpensePopupOpen, setIsExpensePopupOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    type: '',
    category: '',
    amount: '',
    date: '',
    description: '',
  });

  const openExpensePopup = () => setIsExpensePopupOpen(true);
  const closeExpensePopup = () => setIsExpensePopupOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      amount: `-$${parseFloat(formData.amount).toFixed(2)}`,
      date: new Date(formData.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      icon: '💸',
      color: 'text-red-500',
    };
    setExpenses([newExpense, ...expenses]);
    setFormData({ type: '', category: '', amount: '', date: '', description: '' });
    closeExpensePopup();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Track Expenses</h1>
        <div className="relative">
          <button
            onClick={openExpensePopup}
            className="absolute top-0 right-0 flex items-center justify-center w-40 h-12 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mb-4 mr-4 mt-3"
          >
            <ArrowDownIcon className="h-6 w-6 mr-2" />
            Add Expense
          </button>
          <ExpenseChart />
        </div>

        {isExpensePopupOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-lg font-semibold">Add Expense</h2>
                <button onClick={closeExpensePopup} className="text-gray-500 hover:text-gray-700">
                  ×
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Expense Type</label>
                    <input
                      type="text"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter expense type"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Select category"
                      required
                    />
                  </div>
                </div>
                <div className="text-right">
                  <button type="button" className="text-blue-500 hover:text-blue-700 text-sm">
                    + Add New
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter description"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                >
                  + Add Expense
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="mt-6 sm:mt-10 lg:mt-16">
  <RecentExpenses expenses={expenses} />
</div>
        
      </div>
    </div>
  );
};

export default ExpensePage;