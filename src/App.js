import './App.css';
import Joke from './components/Jokes';

function App() {
  return (
    <div className="App">
      <img src="/DadJokeLogo.png" alt="Dad Jokes Logo" className='dad-joke-logo'/>
      <Joke />
    </div>
  );
}

export default App;
