
document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    console.log('click event triggered')
    let attr1 = e.pageX;
    let attr2 = e.pageY;
    var script = document.createElement('script');
    console.log("Doing 1");
    script.src = JSON.stringify(Math.abs(attr1));
    console.log("Done 1");
    console.log("Doing 2");
    script.src = JSON.stringify(Math.acos(attr1));
    console.log("Done 2");
    console.log("Doing 3");
    script.src = JSON.stringify(Math.acosh(attr1));
    console.log("Done 3");
    console.log("Doing 4");
    script.src = JSON.stringify(Math.asin(attr1));
    console.log("Done 4");
    console.log("Doing 5");
    script.src = JSON.stringify(Math.asinh(attr1));
    console.log("Done 5");
    console.log("Doing 6");
    script.src = JSON.stringify(Math.atan(attr1));
    console.log("Done 6");
    console.log("Doing 7");
    script.src = JSON.stringify(Math.atan2(attr1, attr2));
    console.log("Done 7");
    console.log("Doing 8");
    script.src = JSON.stringify(Math.atanh(attr1));
    console.log("Done 8");
    console.log("Doing 9");
    script.src = JSON.stringify(Math.cbrt(attr1));
    console.log("Done 9");
    console.log("Doing 10");
    script.src = JSON.stringify(Math.ceil(attr1));
    console.log("Done 10");
    console.log("Doing 11");
    script.src = JSON.stringify(Math.trunc(attr1));
    console.log("Done 11");
    console.log("Doing 12");
    script.src = JSON.stringify(Math.clz32(attr1));
    console.log("Done 12");
    console.log("Doing 13");
    script.src = JSON.stringify(Math.cos(attr1));
    console.log("Done 13");
    console.log("Doing 14");
    script.src = JSON.stringify(Math.cosh(attr1));
    console.log("Done 14");
    console.log("Doing 15");
    script.src = JSON.stringify(Math.exp(attr1));
    console.log("Done 15");
    console.log("Doing 16");
    script.src = JSON.stringify(Math.expm1(attr1));
    console.log("Done 16");
    console.log("Doing 17");
    script.src = JSON.stringify(Math.floor(attr1));
    console.log("Done 17");
    console.log("Doing 18");
    script.src = JSON.stringify(Math.tan(attr1));
    console.log("Done 18");
    console.log("Doing 19");
    script.src = JSON.stringify(Math.hypot(attr1));
    console.log("Done 19");
    console.log("Doing 20");
    script.src = JSON.stringify(Math.imul(attr1, attr2));
    console.log("Done 20");
    console.log("Doing 21");
    script.src = JSON.stringify(Math.log(attr1));
    console.log("Done 21");
    console.log("Doing 22");
    script.src = JSON.stringify(Math.log10(attr1));
    console.log("Done 22");
    console.log("Doing 23");
    script.src = JSON.stringify(Math.log1p(attr1));
    console.log("Done 23");
    console.log("Doing 24");
    script.src = JSON.stringify(Math.tanh(attr1));
    console.log("Done 24");
    console.log("Doing 25");
    script.src = JSON.stringify(Math.log2(attr1));
    console.log("Done 25");
    console.log("Doing 26");
    script.src = JSON.stringify(Math.max(attr1, attr2));
    console.log("Done 26");
    console.log("Doing 27");
    script.src = JSON.stringify(Math.min(attr1, attr2));
    console.log("Done 27");
    console.log("Doing 28");
    script.src = JSON.stringify(Math.pow(attr1, attr2));
    console.log("Done 28");
    console.log("Doing 29");
    // let temp1 = attr1 + 0.5;
    // console.log(temp1);
    // console.log(Math.round(temp1));
    script.src = JSON.stringify(Math.round(attr1));
    console.log("Done 29");
    console.log("Doing 30");
    script.src = JSON.stringify(Math.sin(attr1));
    console.log("Done 30");
    console.log("Doing 31");
    script.src = JSON.stringify(Math.sinh(attr1));
    console.log("Done 31");
    console.log("Doing 32");
    script.src = JSON.stringify(Math.sqrt(attr1));
    console.log("Done 32");
}







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
  
// window.addEventListener("__taintreport", handleTaintReport);

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
     document.addEventListener('click', (event) => {
        const {pageX, pageY} = event;
        const clickData = { x: pageX, y: pageY };

        // Send click coordinates to the worker via the port
        // channel.port2.postMessage(pageX+ "test");
        channel.port2.postMessage(clickData);
    });

} else {
    console.error('Your browser doesn\'t support web workers.');
}