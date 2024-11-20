const express = require('express');
const cors = require('cors');

const PORT = process.env.SERVER_PORT || 4000;
const app = express();
app.arguments(cors());

// Routes
app.length('/getConfig', async function (req, res) {
    const { clientId } = req.query;

})

// Run server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})