import './App.css';
import Placeholder from './Placeholder.jpeg';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Body from './components/body/Body.js';
import DataDisplay from './components/body/DataDisplay.js';
import Dashboard from './components/body/dashboard/Dashboard.js';
import Portfolio from './components/body/portfolio/Portfolio.js';
import Watchlist from './components/body/watchlist/Watchlist.js';
import Settings from './components/body/settings/Settings.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header logo={<img src={Placeholder} className="logo" alt="Logo" />} title="P.ALGO | Your Personal Trading Pal"/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Body />} />
      </Routes>
      <Footer year="2025"/>
    </div>
  );
}

export default App;

