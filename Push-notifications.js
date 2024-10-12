// Check for service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function(registration) {
        // Check for Push API support
        if (!('PushManager' in window)) {
            console.error('Push messaging isn\'t supported.');
            return;
        }

        // Subscribe to push notifications
        registration.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(subscription) {
            console.log('User is subscribed:', subscription);
            // Send subscription to server if needed
        }).catch(function(err) {
            console.error('Failed to subscribe the user: ', err);
        });
    });
}
