import logo from './logo.svg';
import './App.css';
import Noticias from './components/Noticias';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Noticias />
      </header>
    </div>
  );
}


export default App;
