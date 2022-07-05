import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Layout from './components/Layout';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Contact = React.lazy(() => import('./components/Contact'));


function App() {
   return (
      <Suspense fallback={<div><h1>...Loading</h1></div>}>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="gallery" element={<Gallery />} />
               <Route path="contact" element={<Contact />} />
            </Route>
         </Routes>
      </Suspense>
   )
}

export default App