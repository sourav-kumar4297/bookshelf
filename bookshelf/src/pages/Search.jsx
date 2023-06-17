import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { booksData } from '../data/booksData';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = event => {
    const query = event.target.value;
    setQuery(query);

    // Filter books based on the query
    const filteredBooks = booksData.filter(
      book => book.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  const handleShelfChange = (bookId, shelf) => {
    // Update the shelf of the selected book
    const updatedBooks = searchResults.map(book => {
      if (book.id === bookId) {
        return { ...book, shelf };
      }
      return book;
    });
    setSearchResults(updatedBooks);
  };

  return (
    <div>
      <header>
        <h1>Search Books</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div>
        <input type="text" value={query} onChange={handleSearchChange} placeholder="Search books..." />
        <ul>
          {searchResults.map(book => (
            <li key={book.id}>
              <span>{book.title}</span>
              <div>
                <select value={book.shelf} onChange={event => handleShelfChange(book.id, event.target.value)}>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
