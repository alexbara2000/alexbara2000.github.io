// self.onmessage = (event) => {
//     if (event.data === 'initialize') {
//         // Retrieve the port from the message
//         const port = event.ports[0];

//         // Listen for messages on the port
//         port.onmessage = (event) => {
//             // const pageX = event.data;
//             // var script = document.createElement('script');
//             // script.src = x+y;
//             console.log(JSON.stringify(event));

//             // Send a response back to the main page
//             port.postMessage(`Received the event`);
//         };
        
//         // Send an initial message back to the main page
//         port.postMessage('Worker initialized and ready.');
//     }
// };