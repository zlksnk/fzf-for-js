import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import { Basic } from "./views/basic";
import { WithWorker } from "./views/with-worker";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="basic" element={<Basic />} />
        <Route path="with-worker" element={<WithWorker />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </Router>
  );
}
