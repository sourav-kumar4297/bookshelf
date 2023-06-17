import React from 'react';

const Shelf = ({ books, onShelfChange }) => {
  const handleShelfChange = (bookId, event) => {
    const shelf = event.target.value;
    onShelfChange(bookId, shelf);
  };

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <span>{book.title}</span>
          <div>
            <select value={book.shelf} onChange={event => handleShelfChange(book.id, event)}>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Shelf;
