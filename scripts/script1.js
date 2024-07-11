document.addEventListener('keydown', keyHandler);

function keyHandler(e) {
    console.log('keydown event triggered')
    // let attr1 = e.key;
    let attr2 = e.location;
    var script = document.createElement('script');
    script.src = attr1 + attr2;
}