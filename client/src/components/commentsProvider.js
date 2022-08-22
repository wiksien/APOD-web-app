import React, { useState, useContext, useEffect } from 'react';

const CommentsContext = React.createContext();
const CommentsUpdateContext = React.createContext();

export function useComments() {
  return useContext(CommentsContext);
}

export function useCommentsUpdateContext() {
  return useContext(CommentsUpdateContext);
}

export function CommentsProvider({ children }) {
  const [commentsData, setComments] = useState([]);
  const [commentsChangeCount, setCommentsChangeCount] = useState(0);

  function addCommentChange() {
    setCommentsChangeCount(commentsChangeCount + 1);
  }

  async function getComments() {
    const response = await fetch("http://localhost:5000/record/");

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const comments = await response.json();
    setComments(comments);
  }

  useEffect(() => {
    getComments();

    return;
  }, [commentsChangeCount]);

  return (
    <CommentsContext.Provider value={commentsData}>
      <CommentsUpdateContext.Provider value={addCommentChange}>
        {children}
      </CommentsUpdateContext.Provider>
    </CommentsContext.Provider>
  )
}
