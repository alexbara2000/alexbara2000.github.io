document.addEventListener('keyup', keyHandler2);
function keyHandler2(e) {
    const {keyCode} = e;
    var arr = new Array(90);
    arr[45]=0;
    arr[58]=0;
    arr[65]=1;
    arr[66]=0;
    arr[75]=0;

    var value=arr[keyCode];
    if (value === 1){
        console.log("IT WORKS");
    }
    else{
        console.log("IT doesn't work :(");
    }
}
