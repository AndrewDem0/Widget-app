import React, { useEffect, useState } from 'react';
import { eventEmitter } from '../utils/EventEmitter';

const Widget2 = () => {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Widget 2 is active!');
        }, 1000);

        const handleMessage = (data) => {
            setMessage(data.message);
        };

        eventEmitter.on('sendDataToWidget2', handleMessage);

        return () => {
            clearInterval(interval);
            eventEmitter.off('sendDataToWidget2', handleMessage);
        };
    }, []);

    return (
        <div>
            <h2>Widget 2</h2>
            <p>This is Widget 2!</p>
            {message && (
                <div style={{
                    marginTop: '10px',
                    padding: '10px',
                    backgroundColor: '#333',
                    color: '#fff',
                    borderRadius: '8px',
                    maxWidth: '300px'
                }}>
                    <strong>Повідомлення з Widget1:</strong> <br /> {message}
                </div>
            )}
        </div>
    );
};

export default Widget2;
