self.onmessage = (event) => {
    if (event.data === 'initialize') {
        // Retrieve the port from the message
        const port = event.ports[0];

        // Listen for messages on the port
        port.onmessage = (event) => {
            const { x, y} = event.data;
            // const pageX = event.data;
            // var script = document.createElement('script');
            // script.src = x+y;
            console.log(`Click coordinate received from main page: (${x}, ${y})`);

            // Send a response back to the main page
            port.postMessage(`Received click at: (${x}, ${y})`);
        };
        
        // Send an initial message back to the main page
        port.postMessage('Worker initialized and ready.');
    }
};