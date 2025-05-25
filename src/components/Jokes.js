// need to import the CSS on here and the button when I make it

import { useState } from "react";
import { Button, Card } from 'antd';

const Joke = () => {
    const [joke, setJoke] = useState("");

    const fetchApi = () => {
        fetch(
           "https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
           })
        .then((res) => res.json())
        .then((data) => setJoke(data.joke));
    };

    return (
        <div className="joke-box">
            <Card style={{ width: 500 }}>
                <p className="joke">{joke}</p>
                 <Button onClick={fetchApi} className="get-a-joke-btn">Get a Joke</Button>
            </Card>
        </div>
    );
}

export default Joke;