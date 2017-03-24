// GetTickCountFrontEnd.js

// var mylib = require('./mylibrary.js');
var loadedLib = require('./GetTickCountLibrary.js');

console.log("GetTickCount() : Synchronous result:");
console.log(loadedLib.getTickCountSync());

loadedLib.getTickCount(function(error, tickCount){
	if (error) {
		console.log("Error in asynchronous call:");
		console.log(error);
	} else {
		console.log("No error in asynchronous call.");
		console.log("GetTickCount() : Asynchronous result:");
		console.log(tickCount);
	}
});
