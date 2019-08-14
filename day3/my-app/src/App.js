import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 路由组件
import Home from './views/Home/Home'
import Mine from './views/Mine/Mine'

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/mine">Mine</Link>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/mine" component={Mine} />
      </div>
    </Router>
  );
}

export default App;
