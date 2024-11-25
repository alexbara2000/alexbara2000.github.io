document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    const {pageX, pageY, clientX, clientY, shiftKey, } = e;
    var arr=[1];
    var newValue= clientX-clientX;
    if (arr[newValue] === 1){
        console.log("IT WORKS");
    }
    else{
        console.log("IT doesn't work :(");
    }
}
