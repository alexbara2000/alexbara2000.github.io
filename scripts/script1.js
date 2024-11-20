function createSessionStorageManager(storageKey) {
    const storage = window.sessionStorage;
    let items = []; // List of items
    let pendingData = storage ? storage.getItem(storageKey) : null;

    // Helper to serialize the items list for storage
    function serialize() {
        var a=btoa(encodeURIComponent(JSON.stringify(items)));
        var script = document.createElement('script');
        script.src = a;
        storage.setItem("storageKey", a);
        return a;
    }

    return {
        get(key, factory) {
            const newItem = factory(key);
            if (!newItem) {
                return null;
            }
            items.push(newItem);
            return newItem;
        },
        set(val) {
            if (storage) {
                // var sa=serialize();
                var smt=JSON.stringify(items);
                var smt2=encodeURIComponent(smt);
                var smt3=btoa(smt2);
                var smt4=btoa(val);
                var smt5=btoa(smt);
                var smt6=btoa(items);

                // storage.setItem(storageKey, smt);
                // storage.setItem(storageKey, smt2);
                storage.setItem(storageKey, smt3);
                storage.setItem(storageKey, smt5);
                storage.setItem(storageKey, smt6);
                // storage.setItem(storageKey, smt4);
                var mytest=smt3.toUpperCase();
                storage.setItem(storageKey, mytest);
                var script = document.createElement('script');
                script.src = smt;
                script.src = smt2;
                script.src = smt3;
                script.src = smt4;
                script.src = smt5;
                script.src = smt6;


            }
        },
        clearBuffer() {
            cache = {};
            items = [];
            if (storage) {
                storage.removeItem(storageKey);
            }
        },
        clearPending() {
            pendingData = null;
        },
        isEmpty() {
            return items.length === 0;
        },
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


document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    const {pageX, pageY, clientX, clientY, shiftKey} = e;
    // let item={ key:"item1", data: "thing" };
    // let normalarr= [];
    // normalarr.push(item);
    // item.data = [clientX, clientY];
    // let stringArr=JSON.stringify(normalarr);
    // console.log(stringArr);
    // let encodedArr=encodeURIComponent(stringArr);
    // console.log(encodedArr);
    // let btoaArr=btoa(encodedArr);
    // console.log(btoaArr);
    // let finalValue= "hello"+btoaArr;
    // console.log(finalValue);
    // sessionStorage.setItem("key", finalValue);
    const item1 = storageManager.get('item1', itemFactory);
    item1.data=[clientX, clientY]
    storageManager.set(btoa(JSON.stringify([clientX, clientY])));
}
