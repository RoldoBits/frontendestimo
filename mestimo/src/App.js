import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Login">
          <p className="text center">Iniciar Sessió</p>
        </div>
        <div className="space"></div>
        <div className="Login">
          <p className="text center">Registrar-se</p>
        </div>
      </header>
    </div>
  );
}

export default App;
