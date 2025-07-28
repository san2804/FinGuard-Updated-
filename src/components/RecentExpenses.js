import React, { useState } from 'react';
import { Edit2, Save, X, Trash2 } from 'lucide-react';

const RecentExpenses = ({ expenses, onExpenseUpdate, onExpenseEdit, onExpenseDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEditClick = (expense) => {
    setEditingId(expense.id);
    setEditForm({
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
      description: expense.description || '',
    });
  };

  const handleSaveClick = (expenseId) => {
    if (!editForm.title || !editForm.amount || !editForm.date) {
      alert('Please fill in all required fields (title, amount, date)');
      return;
    }

    if (onExpenseEdit) {
      onExpenseEdit(expenseId, editForm);
    }

    setEditingId(null);
    setEditForm({});
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleDeleteClick = (expenseId, expenseTitle) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${expenseTitle}"?`);
    if (confirmDelete && onExpenseDelete) {
      onExpenseDelete(expenseId);
    }
  };

  const handleInputChange = (field, value) => {
    setEditForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatDateForInput = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  const formatDateForDisplay = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  if (!expenses || expenses.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Expenses</h2>
        <p className="text-gray-600">No expenses recorded yet. Add your first expense to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Expenses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="group bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div
                  className={`w-12 h-12 ${expense.color || 'bg-gray-100'} rounded-lg flex items-center justify-center text-xl`}
                >
                  {expense.icon || '💸'}
                </div>

                <div className="flex-1">
                  {editingId === expense.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editForm.title || ''}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm font-medium focus:ring-red-500 focus:border-red-500"
                        placeholder="Expense title"
                      />
                      <input
                        type="number"
                        value={editForm.amount || ''}
                        onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || 0)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-red-500 focus:border-red-500"
                        placeholder="Amount"
                        min="0"
                        step="0.01"
                      />
                      <input
                        type="date"
                        value={formatDateForInput(editForm.date) || ''}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-gray-600 focus:ring-red-500 focus:border-red-500"
                      />
                      <textarea
                        value={editForm.description || ''}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-gray-600 focus:ring-red-500 focus:border-red-500"
                        placeholder="Description (optional)"
                        rows="2"
                      />
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-medium text-gray-800">{expense.title}</h3>
                      <p className="text-sm text-gray-600">{formatDateForDisplay(expense.date)}</p>
                      {expense.description && (
                        <p className="text-xs text-gray-500 mt-1">{expense.description}</p>
                      )}
                      {expense.category && (
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mt-1">
                          {expense.category}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {editingId === expense.id ? (
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleSaveClick(expense.id)}
                      className="p-1.5 text-green-600 hover:bg-green-100 rounded transition-colors"
                      title="Save changes"
                    >
                      <Save size={16} />
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                      title="Cancel editing"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="hidden group-hover:flex items-center space-x-1">
                      <button
                        onClick={() => handleEditClick(expense)}
                        className="p-1.5 text-orange-600 hover:bg-orange-100 rounded transition-colors"
                        title="Edit expense"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(expense.id, expense.title)}
                        className="p-1.5 text-red-600 hover:bg-red-100 rounded transition-colors"
                        title="Delete expense"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </>
                )}

                <div className="text-right ml-4">
                  <span className="text-red-600 font-medium">
                    - LKR {(editingId === expense.id ? editForm.amount : expense.amount)?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Total Expenses</h3>
          <span className="text-xl font-bold text-red-600">
            - LKR {expenses.reduce((total, expense) => total + (expense.amount || 0), 0).toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {expenses.length} expense{expenses.length !== 1 ? 's' : ''} recorded
        </p>
      </div>
    </div>
  );
};

export default RecentExpenses;
