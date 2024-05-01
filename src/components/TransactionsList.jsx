import React, { useState } from 'react';
import '../style/TransactionsList.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Import pencil icon if necessary

const TransactionsList = ({ title }) => {
    // Fictionnal data
    const transactionsData = [
        { id: 1, date: '2024-03-01', purpose: 'Groceries', credit: 50, debit: 0 },
        { id: 2, date: '2024-03-05', purpose: 'Electricity Bill', credit: 0, debit: 80 },
        { id: 3, date: '2024-03-10', purpose: 'Salary', credit: 2000, debit: 0 },
        { id: 4, date: '2024-03-15', purpose: 'Rent', credit: 0, debit: 1000 },
        { id: 5, date: '2024-03-20', purpose: 'Dinner', credit: 80, debit: 0 },
        { id: 6, date: '2024-03-25', purpose: 'Gas Bill', credit: 0, debit: 50 },
        { id: 7, date: '2024-02-01', purpose: 'Car Service', credit: 120, debit: 0 },
        { id: 8, date: '2024-02-10', purpose: 'Salary', credit: 2000, debit: 0 },
        { id: 9, date: '2024-02-15', purpose: 'Rent', credit: 0, debit: 1000 },
        { id: 10, date: '2024-02-20', purpose: 'Lunch', credit: 20, debit: 0 },
    ];

    const [editingId, setEditingId] = useState(null); // State to track which purpose is being edited

    // Handler to activate editing mode for a specific purpose
    const handleEdit = (id) => {
        setEditingId(id);
    };

    // Handler to update purpose value
    const handlePurposeChange = (event, id) => {
        const newPurpose = event.target.value;
        // Update purpose value in transactionsData
        const updatedTransactions = transactionsData.map(transaction => {
            if (transaction.id === id) {
                return { ...transaction, purpose: newPurpose };
            }
            return transaction;
        });
        // Update transactionsData
        // In a real application,Udpadate database here, for now console log the updated data
        console.log(updatedTransactions);
        setEditingId(null); // Exit editing mode
    };

    // Handler to exit editing mode when clicking outside the input or pressing Enter
    const handleBlur = () => {
        setEditingId(null);
    };

    return (
        <div className="transactions-list">
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Purpose</th>
                        <th>Credit</th>
                        <th>Debit</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsData.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>
                                {editingId === transaction.id ? (
                                    <input
                                        type="text"
                                        value={transaction.purpose}
                                        onChange={(event) => handlePurposeChange(event, transaction.id)}
                                        onBlur={handleBlur}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleBlur();
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="purpose_bloc" onClick={() => handleEdit(transaction.id)}>
                                        {transaction.purpose} <p className="icon-pencil">&#128394;</p>
                                        {/* pencil  unicode decimal html code*/}
                                    </span>
                                )}
                            </td>
                            <td>{transaction.credit}</td>
                            <td>{transaction.debit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsList;
