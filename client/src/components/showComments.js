import React from "react";
import { useComments } from "./commentsProvider";

export default function ShowComments() {

  const commentsData = useComments();

  let commentsList = [];

  commentsData.forEach((comment) => {
    commentsList.unshift({
      name: comment.name,
      commentContent: comment.commentContent,
    });
  });

  let htmlString = [];

  commentsList.forEach((comment, index) => {
    htmlString.push(
      `<section className='comments__comment${
        index + 1
      }'><span className='comments__commentName${index + 1}'>` +
        comment.name +
        ` says: </span><span className='comments__commentContent${
          index + 1
        }'>` +
        comment.commentContent +
        "</span></section>"
    );
  });

  htmlString = htmlString.join("");

  return (
    <section
      className="comments__wrapper"
      style={{
        "display": "flex",
        "flexDirection": "column",
        "gap": "1em",
        "fontSize": "1.2em",
        "marginBottom": "1.2em"
      }}

      dangerouslySetInnerHTML={{ __html: htmlString }}
    >
    </section>
  );
}
