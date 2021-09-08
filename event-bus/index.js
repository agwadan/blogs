const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4005;

/* ------MIDDLEWARE--------- */
app.use(express.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;
  events.push(event);
  axios.post(`http://localhost:4000/events`, event); //--------------> Posts
  axios.post(`http://localhost:4001/events`, event); //--------------> Comments 
  axios.post(`http://localhost:4002/events`, event); //--------------> Query
  axios.post(`http://localhost:4003/events`, event); //--------------> Moderation
  res.send({ status: 'ok' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(PORT, () => { console.log(`Event bus listening at port: ${PORT}`); });