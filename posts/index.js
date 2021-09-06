const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = {
    id, title
  };

  await axios.post(`http://localhost:4005/events`, {
    type: 'PostCreated',
    data: { id, title }
  })

  res.status(201).send(posts[id]); //res "201" for a new resource created
});

app.post('/events', (req, res) => {
  console.log('Received event', req.body.type);
  res.send('success :-)')
})

app.listen(PORT, () => { console.log(`Posts listening at port ${PORT}`) });