const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hi, I am Root");
});

app.get("/listing", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My Villa",
//     description: "By the Beach",
//     price: 1200,
//     location: "Calangute, Goa",
//   });
//   await sampleListing.save();
//   console.log("Sample Saved!");
//   res.send("successful Testing");
// });

app.listen(8080, () => {
  console.log("Listening to Port 8080");
});
