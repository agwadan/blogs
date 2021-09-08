const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4003;

/* ----------MIDDLEWARE--------- */
app.use(express.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved';
    await axios.post(`http://localhost:4005/events`, {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    })
    console.log(`status ---> ${status}`);
  }
  res.send('success :-)');
})

app.listen(PORT, () => console.log(`Moderation running on port: ${PORT}`));