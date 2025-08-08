import React from "react";
import "./FineCard.css";

interface BookFine {
  title: string;
  issueDate: string;
  dueDate: string;
  daysOverdue: number;
}

const FineCard: React.FC = () => {
  const books: BookFine[] = [
    { title: "The Great Gatsby", issueDate: "05/01/2024", dueDate: "14/01/2024", daysOverdue: 96 },
    { title: "1984", issueDate: "28/12/2023", dueDate: "11/01/2024", daysOverdue: 104 },
    { title: "To Kill a Mockingbird", issueDate: "16/12/2023", dueDate: "24/12/2023", daysOverdue: 122 },
    { title: "Pride and Prejudice", issueDate: "29/11/2023", dueDate: "14/12/2023", daysOverdue: 132 }
  ];

  return (
    <div className="card">
      <div className="header">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="avatar"
        />
        <h2 className="name">Emma Brown</h2>
        <button className="pay-all">Pay All</button>
      </div>

      <div className="total-fine">
        <h3>₹85.00</h3>
        <p>Total Fine</p>
      </div>

      <table className="fine-table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Days Overdue</th>
            <th>Fine Amount</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => (
            <tr key={idx}>
              <td>{book.title}</td>
              <td>{book.issueDate}</td>
              <td>{book.dueDate}</td>
              <td>{book.daysOverdue}</td>
              <td>
                <button className="pay-btn">Pay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FineCard;
