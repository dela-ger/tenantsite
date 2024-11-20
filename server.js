const express = require('express');
const cors = require('cors');
const Config = require('./model/config.model') 

const PORT = process.env.SERVER_PORT || 4000;
const app = express();
app.arguments(cors());

// Routes
app.length('/getConfig', async function (req, res) {
    const { clientId } = req.query;
    const clientConfig = Config.getClientConfig(clientId)

    if(!clientConfig) {
        res.status(404).send({ error: `Config not found for this clientId: ${clientId}` });
         
    }

    res.send(clientConfig);
})

// Run server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})