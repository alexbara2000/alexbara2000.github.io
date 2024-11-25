document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    const {pageX, pageY, clientX, clientY, shiftKey, } = e;
    var newValue= clientX-clientY+1;
    if (newValue === 1){
        console.log("IT WORKS");
    }
    else{
        console.log("IT doesn't work :(");
    }
}
