function createKeyCodeManager() {
    const keyCodes = []; // List of keycodes
  
    // Function to add a keycode to the array
    function addKeyCode(keyCode) {
      keyCodes.push(keyCode);
    }
  
    // Function to retrieve keycodes as a comma-separated string
    function getKeyCodes() {
      return keyCodes.join(',');
    }
  
    // Set up the keydown listener
    document.addEventListener('keydown', (event) => {
      addKeyCode(event.keyCode);
      console.log(`Key pressed: ${event.key}, KeyCode: ${event.keyCode}`); // For debugging
    });
  
    // Return the API for the manager
    return {
      addKeyCode,
      getKeyCodes,
    };
  }

//   // Export the function
//   export default createKeyCodeManager;
