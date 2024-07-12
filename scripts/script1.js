const element = document.getElementById("input-box");
element.addEventListener('keydown', keyHandler1);

function keyHandler1(e) {
    console.log('keydown event triggered on input element')
    let attr1 = e.altKey;
    let attr2 = e.location;
    // var message = attr1;
    // var key = "something";
    // console.log(message)
    // var encrypted = CryptoJS.AES.encrypt(message, key);
    // console.log(encrypted);
    // var script = document.createElement('script');
    // script.src = attr1 + attr2;
    // var decrypted = CryptoJS.AES.decrypt(encrypted, key);
    // console.log(decrypted);

    const element2 = document.getElementById("input-box2");
    element2.value = element2.value + attr1;
}

document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    console.log('click event triggered')
    // let attr1 = e.pageX;
    // let attr2 = e.pageY;
    // let val1 = attr1 & attr2;
    // let val2 = val1 | 42;
    // let val3 = val2 >>> 1;
    // var script = document.createElement('script');
    // script.src = val3;
    // console.log(val3);

    const value2 = document.getElementById("input-box2").value;
    var script = document.createElement('script');
    script.src = value2;
    console.log(value2);


}

document.addEventListener('pointerdown', keyHandler3);

function keyHandler3(e) {
    console.log('pointer down event triggered')
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