// app.js
const express = require('express');
const app = express();
const PORT = 3000;
const usersRoute = require('./route/user');
const { isValid, checkUserAgent } = require('./middleware/user');
const rateLimit = require('express-rate-limit');
const auditLogger = require('./middleware/audit/auditLogger');

app.use(express.json());
app.use(auditLogger);
app.use(checkUserAgent);

const rateLimiter = rateLimit({
    windowMs:1*1000,
    max:1,
    message: {
        message: 'Too many requests from this IP, please try again in 30 seconds.'
    }
});


// Use the users route
app.use('/api/user',rateLimiter,isValid, usersRoute);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
