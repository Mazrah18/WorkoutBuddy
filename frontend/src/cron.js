// keepBackendAlive.js

const pingBackend = () => {
    fetch('https://workoutbuddy-3dqd.onrender.com/api/workouts')
        .then(response => {
            if (response.ok) {
                console.log('Backend is active');
            } else {
                console.error('Failed to ping backend');
            }
        })
        .catch(error => {
            console.error('Error pinging backend:', error);
        });
};

pingBackend();
setInterval(pingBackend, 14 * 60 * 1000);
