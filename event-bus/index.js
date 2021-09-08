const express = require('express');
/* const cors = require('cors'); */
const axios = require('axios');

const app = express();
const PORT = 4005;

app.use(express.json());
/* app.use(cors()); */

app.post('/events', (req, res) => {
  const event = req.body;
  console.log(event);

  axios.post(`http://localhost:4000/events`, event); //--------------> Posts
  axios.post(`http://localhost:4001/events`, event); //--------------> Comments 
  axios.post(`http://localhost:4002/events`, event); //--------------> Query
  axios.post(`http://localhost:4003/events`, event); //--------------> Moderation

  res.send({ status: 'ok' });
})

app.listen(PORT, () => { console.log(`Event bus listening at port ${PORT}`); })