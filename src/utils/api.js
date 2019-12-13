const axios = require("axios");

const baseUrl = "https://news-press.herokuapp.com/api";
exports.fetchAllArticles = () => {
  return axios.get(`${baseUrl}/articles`).then(({ data }) => {
    return data.articles;
  });
};
