console.log(this);

// returns the Window object
// Window {	postMessage: ƒ,
// blur: ƒ,
// focus: ƒ,
// close: ƒ,
// frames: Window, …}

function myFunction() {
	console.log(this);
}

// Call the function
myFunction();

// returns the Window object!
// Window {	postMessage: ƒ,
// blur: ƒ,
// focus: ƒ,
// close: ƒ,
// frames: Window, …}
