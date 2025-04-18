import React, { useEffect } from 'react';

const Widget2 = () => {
    useEffect(() => {
        // Симулюємо таймер або підписку
        const timer = setInterval(() => {
            console.log('Widget 2 is active!');
        }, 1000);

        // Очистка при демонтажі компонента
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>Widget 2</h2>
            <p>This is Widget 2!</p>
        </div>
    );
};

export default Widget2;
