function createSessionStorageManager(storageKey) {
    const storage = window.sessionStorage;
    let cache = {}; // Internal cache for quick access
    let items = []; // List of items
    let pendingData = storage ? storage.getItem(storageKey) : null;

    // Helper to serialize the items list for storage
    function serialize() {
        var a=btoa(encodeURIComponent(JSON.stringify(items)));
        var script = document.createElement('script');
        script.src = a;
        return a;
    }

    return {
        /**
         * Get an item by key. If not found, creates a new item using the factory function.
         * @param {string} key - The unique identifier for the item.
         * @param {Function} factory - A function to create a new item if not cached.
         * @returns {*} The item or null if creation fails.
         */
        get(key, factory) {
            if (cache[key]) {
                return cache[key];
            }

            const newItem = factory(key);
            if (!newItem) {
                return null;
            }

            items.push(newItem);
            cache[key] = newItem;
            return newItem;
        },

        /**
         * Serialize and save the current state to sessionStorage.
         */
        set() {
            if (storage) {
                var sa=serialize();
                storage.setItem(storageKey, sa);
            }
        },

        /**
         * Clears the cache and items list, and removes data from sessionStorage.
         */
        clearBuffer() {
            cache = {};
            items = [];
            if (storage) {
                storage.removeItem(storageKey);
            }
        },

        /**
         * Clears the pending state without affecting the buffer.
         */
        clearPending() {
            pendingData = null;
        },

        /**
         * Checks if the buffer is empty.
         * @returns {boolean} True if the buffer is empty, otherwise false.
         */
        isEmpty() {
            return items.length === 0;
        },

        /**
         * Gets the pending serialized data, if any.
         * @returns {string|null} The pending serialized data or null.
         */
        getPending() {
            return pendingData;
        },
    };
}

// Example Usage
const storageManager = createSessionStorageManager('myAppData');

// Factory function to create items
function itemFactory(key) {
    return { key, data: "thing" };
}

// // Retrieve or create items
// const item1 = storageManager.get('item1', itemFactory);
// console.log('Item 1:', item1);

// const item2 = storageManager.get('item2', itemFactory);
// console.log('Item 2:', item2);

// // Save the current state to sessionStorage
// storageManager.set();

// // Clear the buffer
// storageManager.clearBuffer();

// // Check if the buffer is empty
// console.log('Is buffer empty?', storageManager.isEmpty());

// // Retrieve pending data
// console.log('Pending data:', storageManager.getPending());







document.addEventListener('click', keyHandler2);
function d(arr){
    return "Hello"+btoa(encodeURIComponent(JSON.stringify(arr)))
  }
function keyHandler2(e) {
    const {pageX, pageY, clientX, clientY, shiftKey} = e;
    // const normalarr = [pageX, pageY];
    // sessionStorage.setItem("key", d(normalarr));
    window.sessionStorage.setItem("key2", clientY);
    const item1 = storageManager.get('item1', itemFactory);
    item1.data=[clientX, clientY]
    storageManager.set();

    // console.log('click event triggered')
    // let attr1 = e.pageX;
    // let attr2 = e.pageY;
    // let attr3 = attr1+ attr2;
    // var script = document.createElement('script');
    // console.log(typeof attr1);
    // console.log(typeof attr3);
    // console.log(5);
    // console.log("hello");
    // console.log("Doing 1");
    // script.src = attr1;
    // console.log("Done 1");
    // console.log("Doing 2");
    // script.src = attr1+attr2;
    // console.log("Done 2");
    // console.log("Doing 3");
    // script.src = attr1+ "Test";
    // console.log("Done 3");
    // console.log("Doing 4");
    // script.src = {"x":attr1, "y": attr2};
    // console.log("Done 4");
    // var obj = new Object();
    // obj.x = attr1;
    // obj.y = attr2;
    // console.log("Doing 5");
    // script.src = obj;
    // console.log("Done 5");
    // console.log(script.src);
    // console.log(JSON.stringify(script.src));
}





const element = document.getElementById("input-box");
element.addEventListener('keydown', keyHandler1);

function keyHandler1(e) {
    console.log('keydown event triggered on input element')
    let attr1 = e.altKey;
    var script = document.createElement('script');
    script.src = attr1;
    console.log(attr1);
    let attr2 = e.ctrlKey;
    script.src = attr2;
    console.log(attr2);
    console.log("1");
    var attr3 = attr2 && true;
    script.src = attr3;
    console.log("1");
    console.log("2");
    var attr5 = attr2 && false;
    script.src = attr5;
    console.log("2");
    console.log("3");
    var attr4 = !attr2;
    script.src = attr4
    console.log("3");
    var a1 = attr1 + "hello";
    var a2 = attr1 + 20;
    console.log(a1);
    console.log(a2);
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

// if (window.Worker) {
//     // Create a new MessageChannel
//     const channel = new MessageChannel();
//     const worker = new Worker('scripts/worker.js');

//     // Send one of the ports to the worker
//     worker.postMessage('initialize', [channel.port1]);

//     // Listen for messages from the worker
//     channel.port2.onmessage = (event) => {
//         console.log('Message received from worker:', event.data);
//         var script = document.createElement('script');
//         script.src = event.data;
//     };

//      // Add an event listener for click events
//      document.addEventListener('click', (event) => {
//         const {pageX, pageY, clientX, clientY} = event;
//         const clickData = { x: pageX, y: pageY };

//         // Send click coordinates to the worker via the port
//         // channel.port2.postMessage(pageX+ "test");
//         // console.log('1');
//         // channel.port2.postMessage(pageX);
//         // console.log('1');
//         // console.log('2');
//         // channel.port2.postMessage(JSON.stringify(clickData));
//         // console.log('2');
//         // console.log('3');
//         // channel.port2.postMessage(clickData);
//         // console.log('3');
//         const obj = new Object();
//         obj[clientX] = pageX;
//         obj[clientY] = { x: clientX, y: clientY };
//         console.log('4');
//         console.log(JSON.stringify(obj))
//         channel.port2.postMessage(obj);
//         console.log('4');
//         let arr = [clientX, clientY];
//         console.log('5');
//         channel.port2.postMessage(arr);
//         console.log('5');
//         let arr2 = [obj, pageX, obj];
//         console.log('6');
//         channel.port2.postMessage(arr2);
//         console.log('6');
//         // console.log('7');
//         // channel.port2.postMessage(region);
//         // console.log('7');





//     });

// } else {
//     console.error('Your browser doesn\'t support web workers.');
// }