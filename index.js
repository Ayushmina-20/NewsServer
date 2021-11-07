require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 4000;
const cors = require("cors");
const axios = require("axios");
app.use(express.json());

const corsOptions = {
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
const User = require("./model/userSchema");
const Category = require("./model/catSchema");
const DB =
  "mongodb+srv://Ayushmina:News@cluster0.oskav.mongodb.net/News_data?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    //useCreateIndex:true,
    useUnifiedTopology: true,
    //useFindAndModify:false
  })
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });
const URL1 =
  "https://newsapi.org/v2/everything?q=Wipro&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL2 =
  "https://newsapi.org/v2/everything?q=Infy&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL3 =
  "https://newsapi.org/v2/everything?q=Infosys&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL4 =
  "https://newsapi.org/v2/everything?q=TCS&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL5 =
  "https://newsapi.org/v2/everything?q=TechMahindra&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL6 =
  "https://newsapi.org/v2/everything?q=Accenture&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL7 =
  "https://newsapi.org/v2/everything?q=Blockchain&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL8 =
  "https://newsapi.org/v2/everything?q=AI&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL9 =
  "https://newsapi.org/v2/everything?q=AWS&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL10 =
  "https://newsapi.org/v2/everything?q=IBM&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL11 =
  "https://newsapi.org/v2/everything?q=Microsoft&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";
const URL12 =
  "https://newsapi.org/v2/everything?q=Google&language=en&sortBy=publishedAt&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=1";

async function api_call() {
  try {
    //Category Wipro
    const response = await axios.get(URL1);
    let result = await response;
    result = result.data.articles;
    result.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "Wipro",
      });
      const dataregister = await data.save();
      if (dataregister) {
        console.log("saved");
      }
    });
    //Category Infy
    const response2 = await axios.get(URL2);
    let result2 = await response2;
    result2 = result2.data.articles;
    result2.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "Wipro",
      });
      const dataregister2 = await data.save();
      if (dataregister2) {
        console.log("saved");
      }
    });
    //Category Infosys
    const response3 = await axios.get(URL3);
    let result3 = await response3;
    result3 = result3.data.articles;
    result3.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "Infosys",
      });
      const dataregister3 = await data.save();
      if (dataregister3) {
        console.log("saved");
      }
    });
    //Category TCS
    const response4 = await axios.get(URL4);
    let result4 = await response4;
    result4 = result4.data.articles;
    result4.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "TCS",
      });
      const dataregister4 = await data.save();
      if (dataregister4) {
        console.log("saved");
      }
    });
    //Category TechMahindra
    const response5 = await axios.get(URL5);
    let result5 = await response5;
    result5 = result5.data.articles;
    result5.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "Tech Mahindra",
      });
      const dataregister5 = await data.save();
      if (dataregister5) {
        console.log("saved");
      }
    });
    //Category Accenture
    const response6 = await axios.get(URL6);
    let result6 = await response6;
    result6 = result6.data.articles;
    result6.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "Accenture",
      });
      const dataregister6 = await data.save();
      if (dataregister6) {
        console.log("saved");
      }
    });
    //Category Blockchain
    const response7 = await axios.get(URL7);
    let result7 = await response7;
    result7 = result7.data.articles;
    result7.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "Blockchain",
      });
      const dataregister7 = await data.save();
      if (dataregister7) {
        console.log("saved");
      }
    });
    //Category AI
    const response8 = await axios.get(URL8);
    let result8 = await response8;
    result8 = result8.data.articles;
    result8.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "AI",
      });
      const dataregister8 = await data.save();
      if (dataregister8) {
        console.log("saved");
      }
    });
    //Category AWS
    const response9 = await axios.get(URL9);
    let result9 = await response9;
    result9 = result9.data.articles;
    result9.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "AWS",
      });
      const dataregister9 = await data.save();
      if (dataregister9) {
        console.log("saved");
      }
    });
    //Category IBM
    const response10 = await axios.get(URL10);
    let result10 = await response10;
    result10 = result10.data.articles;
    result10.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "IBM",
      });
      const dataregister10 = await data.save();
      if (dataregister10) {
        console.log("saved");
      }
    });
    //Category Microsoft
    const response11 = await axios.get(URL11);
    let result11 = await response11;
    result11 = result11.data.articles;
    result11.map(async (r, idx) => {
      let data = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.description,
        news_article: r.content,
        created_on: r.publishedAt,
        dictionary_token: "Wipro",
      });
      const dataregister11 = await data.save();
      if (dataregister11) {
        console.log("saved");
      }
    });
    //Another category Google
    const response12 = await axios.get(URL12);
    let result12 = await response12;
    result12 = result12.data.articles;
    result12.map(async (r, idx) => {
      let data2 = new User({
        entity_type_id: r.source.id,
        news_type: r.author,
        news_headline: r.title,
        news_article: r.description,
        created_on: r.publishedAt,
        dictionary_token: "TCS",
      });
      const dataregister12 = await data2.save();

      if (dataregister12) {
        console.log("saved");
      }
    });
  } catch (err) {
    console.log(err);
  }
}

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/all", async (req, res) => {
  console.log("hello Doctor2");
  const user = await User.find({ dictionary_token: req.body.myParam }).sort({
    created_on: 1,
  });
  console.log(user);
  res.send(user);
});

app.post("/savedata", async (req, res) => {
  let users = req.body.Users;
  console.log(users);

  try {
    await Promise.all(
      users.map(async (ele) => {
        const user = new Category({ title: ele.name, p_name: ele.id });
        const userRegister = await user.save();
        console.log(userRegister);
      })
    );
    res.status(201).json({ msg: "data saved" });
  } catch (err) {
    console.log(err);
  }
});
// production build for reactjs

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  api_call();
});
