const express = require('express');
const http = require('http');

const app = express();

// Middleware to redirect HTTPS to HTTP
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

// Your other routes and middleware

// Start the HTTP server
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
