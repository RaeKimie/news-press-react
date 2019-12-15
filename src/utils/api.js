const axios = require("axios");

const baseUrl = "https://news-press.herokuapp.com/api";
exports.fetchAllArticles = () => {
  return axios.get(`${baseUrl}/articles`).then(({ data }) => {
    return data.articles;
  });
};

exports.fetchSingleArticle = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

exports.fetchAllComments = uri => {
  return axios.get(`${baseUrl}/${uri}`).then(({ data }) => {
    return data.comments;
  });
};
