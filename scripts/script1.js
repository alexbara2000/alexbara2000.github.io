const element = document.getElementById("input-box");
element.addEventListener('keydown', keyHandler1);

function keyHandler1(e) {
    console.log('keydown event triggered on input element')
    let attr1 = e.altKey;
    var script = document.createElement('script');
    script.src = attr1;
    let attr2 = e.location;
    let attr3 = e.keyCode;
    var message = attr1 + " " + attr2 + " " + attr3;
    script.src = message;
    script.src = attr3;
}

document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    console.log('click event triggered')
    let attr1 = e.pageX;
    let attr2 = e.pageY;
    const obj1 = { x: attr1, y: attr2 };
    var script = document.createElement('script');
    script.src = obj1;
    console.log("Done 1");
    script.src = attr1 + attr2;
    console.log("Done 2");
    script.src = attr1;
    console.log("Done 3");
    script.src = JSON.stringify(obj1);
    console.log("Done 4")
    // script.src = attr1+attr2;
    // let val1 = Math.round(attr1);
    // script.src = val1;
    // let val2 = Math.floor(attr1);
    // script.src = val2;
    // let val3 = Math.ceil(attr1);
    // script.src = val3;
    // let val4 = Math.min(attr1);
    // script.src = val4;
    // let val5 = Math.max(attr1);
    // script.src = val5;
    // let val6 = Math.abs(attr1);
    // script.src = val6;
    // let val7 = Math.log(attr1);
    // script.src = val7;
    // let val8 = Math.pow(attr1, attr2);
    // script.src = val8;
    // let val9 = Math.sqrt(attr1, attr2);
    // script.src = val9;
}

document.addEventListener('pointerdown', keyHandler3);

function keyHandler3(e) {
    // console.log('pointer down event triggered')
    // let attr1 = e.offsetX;
    // let attr2 = e.width;
    // let val1 = attr1 & attr2;
    // let val2 = val1 | 42;
    // let val3 = val2 >>> 1;
    // var script = document.createElement('script');
    // script.src = val3;
    // console.log(val3);
}

function handleTaintReport(report) {
    console.log(report.detail);
  }
  
window.addEventListener("__taintreport", handleTaintReport);

if (window.Worker) {
    // Create a new MessageChannel
    const channel = new MessageChannel();
    const worker = new Worker('scripts/worker.js');

    // Send one of the ports to the worker
    worker.postMessage('initialize', [channel.port1]);

    // Listen for messages from the worker
    channel.port2.onmessage = (event) => {
        console.log('Message received from worker:', event.data);
        var script = document.createElement('script');
        script.src = event.data;
    };

     // Add an event listener for click events
     document.addEventListener('click2', (event) => {
        const pageX = event.pageX;
        // const clickData = { x: pageX, y: pageY };

        // Send click coordinates to the worker via the port
        // channel.port2.postMessage(pageX+ "test");
    });

} else {
    console.error('Your browser doesn\'t support web workers.');
}