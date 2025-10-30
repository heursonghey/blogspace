import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Registerpage from './page/Registerpage.jsx';
import RootLayout from './layout/root-layout.jsx';
import Login from './components/Login.jsx';
import NotFound from './components/NotFound.jsx';
import CardDetail from './components/CardDetail.jsx';
import CardBlogsDetail from './utill/CardBlogsDetail.jsx';
import WriteCreat from './components/WriteCreat.jsx';
import Categories from './components/Categories.jsx';
import Card from './components/Card.jsx';
import Profile from './components/Profile.jsx';
import Register from './components/register.jsx';
import ProfilePictureUploader from'./components/Profile.jsx'
import BookmarkPage from'./components/Bookmark.jsx'
import WriteCreate from './components/WriteCreat.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>} errorElement={<NotFound/>}>
          <Route path='/' element={<App/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path = '*' element={<NotFound/>}/>
          <Route path='/blogs/:id' element={<CardBlogsDetail/>}/>
          <Route path='/write' element={<WriteCreat/>}/>
          <Route path='/profile' element={<ProfilePictureUploader/>}/>
          <Route path='/bookmark' element={<BookmarkPage/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
