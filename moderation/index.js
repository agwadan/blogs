const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4003;
app.use(express.json());

app.post('/events', (req, res) => {

})

app.listen(PORT, () => console.log(`Moderation running on port: ${PORT}`));