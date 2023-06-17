import React, { useState } from 'react';
import { BrowserRouter as Router,Routes , Route, Link } from 'react-router-dom';
import './App.css';
import Shelf from './pages/Shelf';
import Search from './pages/Search';
import { booksData } from './data/booksData';

const App = () => {
  const [books, setBooks] = useState(booksData);

  const handleShelfChange = (bookId, shelf) => {
    // Update the shelf of the selected book
    const updatedBooks = books.map(book => {
      if (book.id === bookId) {
        return { ...book, shelf };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    
      <div className="app">
        <header>
          <h1>My Library</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
            <div>
              <h2>Currently Reading</h2>
              <Shelf
                books={books.filter(book => book.shelf === 'currentlyReading')}
                onShelfChange={handleShelfChange}
              />
              <h2>Want to Read</h2>
              <Shelf
                books={books.filter(book => book.shelf === 'wantToRead')}
                onShelfChange={handleShelfChange}
              />
              <h2>Read</h2>
              <Shelf
                books={books.filter(book => book.shelf === 'read')}
                onShelfChange={handleShelfChange}
              />
            </div>
          } />
          <Route path="/search" element={<Search books={books} onShelfChange={handleShelfChange} />} />
        </Routes>
      </div>
    
  );
};


export default App;
