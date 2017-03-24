# node-ffi-windows-example
A Node.js Foreign Function Interface example application that calls an entry point in the Windows kernel32.dll

The code in this repository was was inspired and influenced by this article: https://stackoverflow.com/questions/16783023/node-ffi-vs-node-extension-for-accessing-existing-c-functionality

To run this code on Windows 10, I recommend following these steps:

- Install the Node.js version manager [Nodist](https://github.com/marcelklehr/nodist) ; I installed it via the installer .exe, but installing via [Chocolatey](https://chocolatey.org/) may work too.
- Use Nodist to install the latest versions of Node.js and npm (I used Node.js version 7.2.1 and npm version 4.0.5).
- To successfully ffi, you will first need to install node-gyp. I recommend doing so by running the following command in a Command Prompt window that has Administrator privileges:

	npm install --global --production windows-build-tool

	- See https://github.com/nodejs/node-gyp#installation
	- See https://github.com/zurb/foundation-sites/issues/7788 : Can't find Python executable "python", you can set the PYTHON env variable. #7788
- In the base directory of the node-ffi-windows-example repository, execute the following command in a Command Prompt or Cygwin window (but not Windows Bash / Windows Subsystem for Linux as of Windows 10 build 14393):

	npm install

- Then this repository's code can be run by one or both of the following commands in a Command Prompt or Cygwin window:

	node GetTickCountAllInOneTest.js (or, equivalently, "npm run case1" or "npm start")
	node GetTickCountFrontEnd.js (or "npm run case2")

- Further reading:
  - For more information about calling into Windows' kernel32.dll : https://msdn.microsoft.com/en-us/library/windows/desktop/ms682596.aspx
