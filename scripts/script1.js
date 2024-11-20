function createSessionStorageManager(storageKey) {
    const storage = window.sessionStorage;
    let items = []; // List of items
    return {
        get(key, factory) {
            const newItem = factory(key);
            items.push(newItem);
            return newItem;
        },
        set() {
            if (storage) {
                var smt=JSON.stringify(items);
                var smt5=btoa(smt);
                storage.setItem(storageKey, smt5);
                var mytest=smt5.toUpperCase();
                storage.setItem(storageKey, mytest);
            }
        },
    };
}

class SessionStorageManager {
    constructor(storageKey) {
        this.storageKey = storageKey;
        this.storage = window.sessionStorage;
        this.items = [];
        this.item={};
    }

    get(key, factory) {
        // const newItem = factory(key);
        // this.items.push(newItem);
        // return newItem;
        return this.item;
    }

    set() {
        if (this.storage) {
            const jsonString = JSON.stringify(this.items);
            const encoded = btoa(jsonString);
            var encoded2=btoa(jsonString);
            this.storage.setItem(this.storageKey, encoded);
            this.storage.setItem(this.storageKey, encoded2);
            const encodedUpperCase = encoded.toUpperCase();
            this.storage.setItem(this.storageKey, encodedUpperCase);
        }
    }
}

// Example Usage
// const storageManager = createSessionStorageManager('myAppData');
const storageManager = new SessionStorageManager('myAppData');

// Factory function to create items
function itemFactory(key) {
    return { key, data: "thing" };
}




document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    const {pageX, pageY, clientX, clientY, shiftKey} = e;
    const item1 = storageManager.get('item1', itemFactory);
    // item1.data=[clientX, clientY]
    item1.bb=JSON.stringify([pageX,clientX]);
    storageManager.set();
}
