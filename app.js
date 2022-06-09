// include modules
const express = require('express');
const path = require('path');

// create express application
const app = express();

// the port the server will accept connections on
const port = 3000;

// start server
app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});