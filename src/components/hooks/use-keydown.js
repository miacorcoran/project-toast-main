import React from 'react';

function useKeydown(key, callback) {
    // Runs when component mounts + cleans up when unmounts
    React.useEffect(() => {
    // Keydown events
    function handleKeyDown(event) {
        // Checks if pressed key matched specified key (escape)
        if(event.code === key) {
            callback(event);
        }
    }

    // Global keydown event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function : removes event listener when component unmounts
    return() => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [key, callback]);
}

export default useKeydown