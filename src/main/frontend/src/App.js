import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


function Header() {
    return (
        <header>
            <h1>welcome</h1>
        </header>
    );
}

function Nav() {
    return (
        <nav><ol>
        <li>html</li>
        <li>css</li>
        </ol></nav>
    );
}

function Article() {
    return (
        <article>
            <h1>Welcome</h1>
            <br />
            <Button>Create</Button>
        </article>
    );
}

export default function App() {
   const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <Article></Article>
            <p>{hello}</p>
            <h1>{hello}</h1>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}