import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import other pages we will navigate to
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createtask" element={<CreateTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;