import axios from 'axios';
import React, { useState, useEffect } from 'react';


export const CommentList = ({ comments }) => {
  console.log(comments);

  /* const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []); */

  const renderedComments = comments.map(comment => {
    return (
      <li key={comment.id}>
        {comment.content}
      </li>
    )
  })

  return (
    <ul>
      {renderedComments}
    </ul>
  )
}
