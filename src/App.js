import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Layout from './components/Layout';
import Fallback from './components/Fallback';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Contact = React.lazy(() => import('./components/Contact'));
const ProjectDetail = React.lazy(() => import('./components/Gallery/projectDetail'));


function App() {
   return (
      <Suspense fallback={ <Fallback /> }>
         <Routes>
            <Route path="/" element={ <Layout /> }>
               <Route index element={ <Home /> } />
               <Route path="/about" element={ <About /> } />
               <Route path="/gallery" element={ <Gallery /> } />
               <Route path="/contact" element={ <Contact /> } />
               <Route path="/gallery/project/:id" element={ <ProjectDetail /> } />
            </Route>
         </Routes>
      </Suspense>
   )
}

export default App