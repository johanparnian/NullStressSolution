import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="home" element={<Home />} />
        <Route path="studentindex" element={<StudentIndex />} />
      </Routes>
    </Router>
  )
}

// function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }