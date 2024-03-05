import React from "react";
import { commentsData } from "../utils/data";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  console.log(commentsData);
  // Disclaimer: I Don't use indexes as keys , but this is just  Dummy Data so I am using here!
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        {/* Using recursion to make nested comments logic😂😂 */}
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
