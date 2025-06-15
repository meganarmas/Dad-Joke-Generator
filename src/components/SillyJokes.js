// need to import the CSS on here and the button when I make it

import { useState } from "react";
import { Button, Card } from 'antd';

const SillyJoke = () => {
    const [joke, setJoke] = useState("");

    const fetchApi = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
  .then(res => res.json())
  .then(data => setJoke(`${data.setup} ... ${data.punchline}`));
    };

    return (
        <div>
             <img src="/DadJokeLogo.png" alt="Dad Jokes Logo" className='dad-joke-logo'/>
        <div className="joke-box">
            <Card style={{ width: 500 }}>
                <p className="joke">{joke}</p>
                 <Button onClick={fetchApi} className="get-a-joke-btn">Get a Joke</Button>
            </Card>
        </div>
        </div>
    );
}

export default SillyJoke;