import './App.css';
import Joke from './components/DadJokes';
import SillyJoke from './components/SillyJokes';
import NavigationBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <NavigationBar />
          <Routes>
              <Route path="/" element={<Joke />} />
              <Route path="/silly-joke" element={< SillyJoke />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
