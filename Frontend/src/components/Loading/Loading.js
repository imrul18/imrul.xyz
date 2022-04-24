import axios from 'axios';
import React, { useState } from 'react';
import './Loading.css';

function Loading() {
    const [loading, setLoading] = useState("")
    setInterval(() => {
        if (loading.length >= 3) {
            setLoading("");
        }
        else {
            setLoading(`${loading}.`)
        }
    }, 500);

    return (
        <div className='landing'>
            <div className="text">Waiting{loading}</div>            
            <div class="loader">
            </div>

        </div>
    );
}

export default Loading;
