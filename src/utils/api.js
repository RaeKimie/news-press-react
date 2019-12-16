const axios = require("axios");

const baseUrl = "https://news-press.herokuapp.com/api";
exports.fetchAllArticles = (author, topic, sort_by) => {
  return axios
    .get(`${baseUrl}/articles`, { params: { author, topic, sort_by } })
    .then(({ data }) => {
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

exports.fetchUserInfo = username => {
  return axios.get(`${baseUrl}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
