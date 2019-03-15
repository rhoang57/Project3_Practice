const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/writersblocks"
);

const userSeed = [
  {
    name: "highwireact",
    email: "ethansmoller@gmail.com",
    password: "plaintext1"
  },
  {
    name: "cvillalta",
    email: "carlos@carlos.carlos",
    password: "plaintext2"
  },
  {
    name: "roberthoang",
    email: "rhoang@hoang.org",
    password: "plaintext3"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
