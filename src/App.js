import './App.css';
import Placeholder from './Placeholder.jpeg';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Body from './components/body/Body.js';

function App() {
  return (
    <div className="App">
      <Header logo={<img src={Placeholder} className="logo" alt="Logo" />} title="P.ALGO | Your Personal Trading Pal"/>
      <Body/>
      <Footer year="2025"/>
    </div>
  );
}

export default App;

