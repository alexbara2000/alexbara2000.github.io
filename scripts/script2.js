document.addEventListener('click', keyHandler2);
function keyHandler2(e) {
    const {pageX, pageY, clientX, clientY, shiftKey} = e;
    let item1=[pageX,clientX];
    let stringItem= JSON.stringify(item1);
    const textEncoder = new TextEncoder();
    let encoded = textEncoder.encode(string);
    sessionStorage.setItem("smt", JSON.stringify(encoded));
}
