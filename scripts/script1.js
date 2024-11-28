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
    }

    get(key, factory) {
        const newItem = factory(key);
        this.items.push(newItem);
        return newItem;
    }

    set() {
        if (this.storage) {
            const jsonString = JSON.stringify(this.items);
            var encoded2=btoa(jsonString);
            this.storage.setItem(this.storageKey, jsonString);
            this.storage.setItem(this.storageKey, encoded2);
        }
    }
}
const storageManager = new SessionStorageManager('myAppData');
function itemFactory(key) {
    return { key, data: "thing" };
}

document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    const {clientX, clientY} = e;
    const item1 = storageManager.get('item1', itemFactory);
    item1.data=[clientX, clientY]
    storageManager.set();
}
