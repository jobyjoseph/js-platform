// This file is not transpiled. So must use commonjs and ES5.

// Register babel to run before our tests run
require('babel-register')();

// Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
