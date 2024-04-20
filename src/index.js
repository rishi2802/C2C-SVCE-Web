import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './routes/About'
import Event from './routes/Event'
import Contact from './routes/Contact'
import Team from './routes/Team';
import Home from './routes/Home';
import Blogs from "./routes/Blogs"
import Footer from './Footer';
import EventDetail from './routes/EventDetail';
import Submit from './routes/Submit';
import SmtwentWrong from './routes/SmtwentWrong'
import Blog from './routes/Blog';
import Dashboard from './routes/Dashboard';
import Scrolltotop from "./Scrolltotop";
import Events from './routes/Events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <App/>
      <Scrolltotop />
      <Routes>
        <Route path='/' index element={<Dashboard/>}/>
        {/* <Route path='/dashboard' element={<Home/>} /> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/event/:name' element={<EventDetail/>} />
        <Route path='/submit' element={<Submit/>} />
        <Route path='/smtworng' element={<SmtwentWrong />} />
        <Route path='/blog/:title' element={<Blog/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
);

