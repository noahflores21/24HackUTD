import MainContent from './MainContent'
import './App.css'
import { useState } from 'react'
import Header from './Navbar'
import ItemGrid from './ItemGrid'
import React from 'react';


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <h1 className="text-3xl font-bold text-blue-800">Hello, Tailwind CSS with Vite!</h1>
    </div>
  );
}

export default App