import React from "react";
import { Link } from "@reach/router";
import { formatTime } from "../utils/utils";

const ArticleCard = ({
  article_id,
  title,
  author,
  created_at,
  topic,
  votes,
  comment_count
}) => {
  const time = formatTime(created_at);
  return (
    <div className="single-article">
      <p className="grey-italic">{topic}</p>
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        votes: {votes} comments: {comment_count}
      </p>
      <p className="grey-italic">
        created by {author} {time}
      </p>
    </div>
  );
};

export default ArticleCard;
