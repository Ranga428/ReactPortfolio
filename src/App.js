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
        paddingTop: '50px',
        minHeight: '100vh',
        width: '100%',   // Takes full width of its parent
        display: 'flex', // Example: for centering content over the image
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}
    >
      <div class="text-container">
          <div class="text-item">Hello</div>
          <div class="text-item">I'm Jenel</div>
          <p class="sub-gradient-text">
          <p> A computer engineer, I'm not just a problem-solver; </p>
          <p> I'm an architect of innovation. I thrive on transforming </p>
          <p> complex challenges into elegant, efficient digital solutions. </p>
      </p>
      </div>
    </div>
  );
}

export default App;

