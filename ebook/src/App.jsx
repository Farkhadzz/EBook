import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Authentication from './components/authentication_page/Authentication';
import Home from './components/home_page/Home';
import Book from './components/book_show_page/Book';
import Favorite from './components/favorites_page/Favorite';
import BookList from './components/book_list_page/BookList';
import BookEditor from './components/books_list_for_admin/BookEditor';
import AddBook from './components/add_book_page/AddBook';
import Profile from './components/Profile/Profile';
import Contact from './components/contact_page/Contact';
import Shop from './components/shop_page/Shop';
import NotFound from './components/not_found_page/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='home' element={<Home />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/bookview' element={<Book />} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/book-list' element={<BookList/>} />
        <Route path='/book-editor' element={<BookEditor/>} />
        <Route path='/add-book' element={<AddBook/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
