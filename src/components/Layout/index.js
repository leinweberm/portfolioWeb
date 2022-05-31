import './index.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout() {
  return (
    <div className='App'>
      <Navbar />
      <div className='page'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
