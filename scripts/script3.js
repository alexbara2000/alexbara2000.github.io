document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    const {pageX, pageY, clientX, clientY, shiftKey, } = e;
    var arr=[0,1];
    var newValue= clientX-clientX+1;
    if (arr[newValue] === 1){
        console.log("IT WORKS");
    }
    else{
        console.log("IT doesn't work :(");
    }
}
