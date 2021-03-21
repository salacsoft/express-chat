const express   = require('express');
const socket    = require('socket');

const app   = express();
const PORT  = 3000 || process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// static files
app.use(express.static('public'));

// socket setup
const io = socket(server);