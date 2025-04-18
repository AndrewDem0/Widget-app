import React, { useEffect } from 'react';
import { eventEmitter } from '../utils/EventEmitter';

const Widget1 = () => {
    useEffect(() => {
        eventEmitter.on('sendDataToWidget2', (data) => {
            console.log('Received data in Widget1:', data);
        });

        return () => {
            eventEmitter.off('sendDataToWidget2');
        };
    }, []);

    const sendData = () => {
        eventEmitter.emit('sendDataToWidget2', { message: 'Hello from Widget1' });
    };

    return (
        <div>
            <h2>Widget 1</h2>
            <p>This is Widget 1!</p>
            <button onClick={sendData}>Send Data to Widget2</button>
        </div>
    );
};

export default Widget1;
