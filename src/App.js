import './App.css';
import Joke from './components/Jokes';
import NavigationBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <NavigationBar />
          <Routes>
              <Route path="/" element={<Joke />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
