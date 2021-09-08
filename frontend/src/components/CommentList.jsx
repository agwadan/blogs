import React from 'react';

export const CommentList = ({ comments }) => {

  const renderedComments = comments.map(comment => {
    let content;

    if (comment.status === 'approved') content = comment.content;
    if (comment.status === 'pending') content = `Awaiting Moderation . . .`;
    if (comment.status === 'rejected') content = `Comment Rejected . . .`;
    return (
      < li key={comment.id} >
        {content}
      </li >
    )
  })

  return (
    <ul>
      {renderedComments}
    </ul>
  )
}