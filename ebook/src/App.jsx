import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Authentication from './components/authentication_page/Authentication';
import Home from './components/home_page/Home';
import Book from './components/book_show_page/Book';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/bookview' element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
