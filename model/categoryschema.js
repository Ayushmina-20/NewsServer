const { json } = require("express");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  entity_type_id: {
    type: String,
    // required:true,
    length: 50,
  },

  news_type: {
    type: String,
    // required:true,
    length: 50,
  },
  news_headline: {
    type: String,
    // required:true,
    length: 100,
  },
  news_article: {
    type: String,
    // required:true,
    length: 250,
  },
  created_on: {
    type: Date,
    required: true,
  },
  sentiment: {
    type: String,
    required: true,
  },
  entity: [
    {
      type: Object,
      required: true,
    },
  ],
  news_image: {
    type: String,
  },
  news_link: {
    type: String,
  },
  dictionary_token: {
    type: String,
    required: true,
    length: 50,
  },
});

const CategoryUser = mongoose.model("categorynew", categorySchema);
module.exports = CategoryUser;
