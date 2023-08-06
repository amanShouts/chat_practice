import { useEffect } from "react";
import { Link } from "react-router-dom"
// import WebSocket from 'ws';

export function Home() {



    useEffect(() => {
        const ws = new WebSocket('ws://localhost:9000/ws');
        ws.onerror = function (e) { console.log("some web socket error", e) };

        ws.onopen = function () {
            ws.send('damn bro');
        };

        ws.onmessage = function (data) {
            console.log('received: %s', data);
        };

        ws.onclose = (event) => {
            console.log('WebSocket connection closed:', event.code, event.reason);
        };
    }, [])


    return (
        <div>
            <Link to="/chat" className="bg-red-600"> Chat </Link>
            hello
        </div>
    )
} 