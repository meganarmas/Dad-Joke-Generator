// need to import the CSS on here and the button when I make it

import { useState } from "react";
import { Button } from 'antd';

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
        <div className="joke-time">
            <Button onClick={fetchApi}>Get a Joke</Button>
                <p className="joke">{joke}</p>
        </div>
    );
}

export default Joke;