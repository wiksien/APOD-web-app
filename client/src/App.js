//IMPORTS
import React from "react";

import WebsiteDescription from "./components/websiteDescription";
import ApiDataShowcase from "./components/apiDataShowcase";
import ApiRevealButton from "./components/apiRevealButton";
import CreateComment from "./components/createComment";
import CommentsHeader from "./components/commentsHeader";
import ShowComments from "./components/showComments";

import { ShowcaseProvider } from "./components/showcaseProvider";
import { CommentsProvider } from "./components/commentsProvider";

//REACT APP
export default function App() {

  const globalStyles = {
    "fontFamily": "Helvetica"
  }

  return (
    <div style={globalStyles}>
      <WebsiteDescription />
      <ShowcaseProvider>
        <ApiDataShowcase />
        <ApiRevealButton />
      </ShowcaseProvider>
      <CommentsProvider>
        <CreateComment />
        <CommentsHeader />
        <ShowComments />
      </CommentsProvider>
    </div>
  );
}
