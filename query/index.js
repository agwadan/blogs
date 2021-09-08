const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4002;

app.use(express.json());
app.use(cors());

const posts = {};


app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;//--------------------- type and data come from the req.body and are destructured here.

  if (type === 'PostCreated') {
    const { id, title } = data; //----------------------- id and title are destructured from the content of posts data.
    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data; //------------- id and content are destructured from the content of comments data.
    const post = posts[postId];

    post.comments.push({ id, content, status });

  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find(com => {
      return com.id === id;
    });
    comment.status = status;
    comment.comment = content;
  }
  res.send('success :-)');
})

app.listen(PORT, () => { console.log(`Query listening on port ${PORT}`) });