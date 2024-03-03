
import './App.css';
import Card from './Card.js';
import Navbar from './Navbar.js'
import "bootstrap/dist/css/bootstrap.css";

function App() {
    return (
     
        <div className="App">
       <Navbar />
          <h1>
              CS 230L
          </h1>
          <h2>
              Section - 001
          </h2>
          <p>
              WVU ID: 800377113
          </p>
          <p>
              Hi I am Avery J Ryan
         </p>
         <div className="card-container">
            <Card />
            <Card />
            <Card />
         </div>
    </div>
  );
}

export default App;
