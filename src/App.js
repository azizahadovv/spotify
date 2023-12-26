import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { HOME } from './components/pages/ExpoPage';


function App(props) {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HOME />} />
      </Routes>
    </div>
  );
}

export default App;