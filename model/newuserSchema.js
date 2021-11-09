const { json } = require("express");
const mongoose = require("mongoose");

const newuserSchema = new mongoose.Schema({
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
  label: {
    type: String,
    required: true,
  },
  entity: [
    {
      type: Object,
    },
  ],
});

const NewUser = mongoose.model("newnew", newuserSchema);
module.exports = NewUser;
