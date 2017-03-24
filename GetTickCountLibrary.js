// GetTickCountLibrary.js

var ffi = require('ffi');

var kernel32DLL = ffi.Library('kernel32.dll', {
  "GetTickCount": [ "int", [] ]
});

module.exports = {
  getTickCountSync : kernel32DLL.GetTickCount,
  getTickCount: kernel32DLL.GetTickCount.async
};
