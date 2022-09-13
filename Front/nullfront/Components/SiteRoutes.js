import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Index from '../pages';
import Home from '../pages/home';
import StudentIndex from '../pages/studentindex';

export default function SiteRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index></Index>} />
        <Route path="home" element={<Home />} />
        <Route path="studentindex" element={<StudentIndex />} />
      </Routes>
    </Router>
  )
}