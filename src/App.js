import BG from './Images/Jenel2.jpg';
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
      }}
    >
      <header className="App-Text">
        <p>Hello</p>
        <h1>I'm Jenel</h1>    
      </header>
    </div>
  );
}

export default App;

