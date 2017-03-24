// GetTickCountAllInOneTest.js

var ffi = require('ffi');

var kernel32DLL = ffi.Library('kernel32.dll', {
  "GetTickCount": [ "int", [] ]
});

console.log("GetTickCount() : Synchronous result:");
console.log(kernel32DLL.GetTickCount());

kernel32DLL.GetTickCount.async(function(error, tickCount){
	if (error) {
		console.log("Error in asynchronous call:");
		console.log(error);
	} else {
		console.log("No error in asynchronous call.");
		console.log("GetTickCount() : Asynchronous result:");
		console.log(tickCount);
	}
});
