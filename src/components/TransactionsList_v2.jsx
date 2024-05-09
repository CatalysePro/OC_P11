import React from 'react';
import '../style/TransactionsList.css';

const TransactionsList = ({ title }) => {
    // fictionnal data
    const transactionsData = [
        { date: '2024-03-01', purpose: 'Groceries', credit: 50, debit: 0 },
        { date: '2024-03-05', purpose: 'Electricity Bill', credit: 0, debit: 80 },
        { date: '2024-03-10', purpose: 'Salary', credit: 2000, debit: 0 },
        { date: '2024-03-15', purpose: 'Rent', credit: 0, debit: 1000 },
        { date: '2024-03-20', purpose: 'Dinner', credit: 80, debit: 0 },
        { date: '2024-03-25', purpose: 'Gas Bill', credit: 0, debit: 50 },
        { date: '2024-02-01', purpose: 'Car Service', credit: 120, debit: 0 },
        { date: '2024-02-10', purpose: 'Salary', credit: 2000, debit: 0 },
        { date: '2024-02-15', purpose: 'Rent', credit: 0, debit: 1000 },
        { date: '2024-02-20', purpose: 'Lunch', credit: 20, debit: 0 },
    ];

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
                    {transactionsData.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.purpose}<p className="icon-arrow-down">&#x2BC6;</p></td>
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
