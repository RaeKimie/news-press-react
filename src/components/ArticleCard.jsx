import React from "react";
import { Link } from "@reach/router";
import { formatTime } from "../utils/utils";
import Voter from "./Voter";

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
    <div className="single-article ">
      <p className="grey-italic">{topic}</p>

      <Link to={`/articles/${article_id}`} className="link">
        <h2>{title}</h2>
      </Link>

      <p>comments: {comment_count}</p>

      <p className="grey-italic">
        posted by {author} date: {time}
      </p>
      <Voter id={article_id} votes={votes} type="articles" />
    </div>
  );
};

export default ArticleCard;
