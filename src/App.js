import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { ERRORPAGE, HOME, SEARCH } from './components/pages/ExpoPage';


function App(props) {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/search" element={<SEARCH />} />
        <Route path="*" element={<ERRORPAGE />} />
      </Routes>
    </div>
  );
}

export default App;