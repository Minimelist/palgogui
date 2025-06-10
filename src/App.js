import './App.css';
import Placeholder from './Placeholder.jpeg';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header logo={<img src={Placeholder} className="logo" alt="Logo" />} title="P.ALGO | Your Personal Trading Pal"/>
      <body><br/><br/><br/><br/><br/><br/></body>
      <Footer year="2025"/>
    </div>
  );
}

export default App;

