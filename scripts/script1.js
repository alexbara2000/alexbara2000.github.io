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
    var script = document.createElement('script');
    let val1 = JSON.stringify(attr1 + attr2);
    script.src = val1;
    console.log(val1);
    let val2 = btoa(val1);
    script.src = val2;
    console.log(val2);
    let val3 = atob(val2);
    script.src = val3;
    console.log(val3);

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