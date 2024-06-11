import { useState, Suspense } from 'react'
import Home from "./pages/home/index.jsx"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // NPM: React Router Dom for routing.
import { Flex, Spinner } from "@chakra-ui/react";
import ContactFormPage from './pages/contactPage/index.jsx';

function App() {


  return (
    <Router>
    <Suspense fallback={<Flex w='100vw' h='100vh'><Spinner color="#FFDEC7" mx='auto' my='auto' /></Flex>} >

    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/contact" element={ <ContactFormPage />} />
    </Routes>

    </Suspense>
  </Router>
  )
}

export default App
