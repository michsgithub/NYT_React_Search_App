import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.NYT_KEY);

const api = {
  // Query NYT API
  searchNYT: function(topic, startYear, endYear) {
    const authKey = "kAhc7nFTDyzcd1jfGoRgFIDUAcVx7HoY";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);
  },
  //these are the functions that call the server.js
  // Retrieves saved articles from the db
  getArticle: function() {
    return axios.get("/api/saved"); //axios helps makes http request, in this case it's a GET request
  },
  // Saves a new article to the db
  saveArticle: function(articleObj) {
    return axios.post("/api/saved", articleObj);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

export default api;
