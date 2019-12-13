import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article_id, title, author, created_at }) => {
  return (
    <div className="single-article">
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        created by {author} time: {created_at}
      </p>
    </div>
  );
};

export default ArticleCard;
