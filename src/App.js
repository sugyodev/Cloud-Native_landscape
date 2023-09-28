import React, { useState } from 'react'
import Dashboard from './pages/Dashboard';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  // const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className="App dashboard w-full min-h-screen h-fit">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
