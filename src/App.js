import React from 'react';
import Navbar from './Component/Navbar'; // Your Navbar component
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders child routes */}
    </>
  );
}

export default App;
