# News-Press Web application

[News-press Website](https://news-press.netlify.com) is a simple news web application built with React.js, using API from a [server](https://github.com/RaeKimie/be-nc-news) I built for a back-end project.
Users can sign in using a predetermined username via the login screen.
Once you have entered the site you can access various news articles, these can be filtered by newest, author, topic, rating, and comment volume. After selecting an article users can create and delete comments, which will automatically display in chronological order underneath the main body of the article.

### Getting started

The website is deployed on Netlify, click [here](https://news-press.netlify.com/) to check it out.
Currently, 6 usernames are available for sign in.

```
tickle122
grumpy19
happyamy2016
cooljmessy
weegembump
jessjelly
```

If you would like to run the site locally, please follow the below instructions via command line.

```
git clone <https://github.com/RaeKimie/news-press-react.git>
cd news-press
npm install
```

Once you’ve cloned it and installed all the software, you will be able to run it locally.

```
npm start
```

### Built with

* Node v12.8.1
* React v16.12.0
*  Reach Router v1.2.1
*  Axios v0.19.0