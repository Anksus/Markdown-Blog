const express = require("express");
const app = express();
const articleRoute = require("./routes/articles");
const mongoose = require("mongoose");
const Article = require("./models/article");
const methodOverride = require("method-override");

mongoose
  .connect("mongodb://127.0.0.1/Markdown", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connected to database"));

const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: "desc",
  });

  res.render("articles/index", { articles: articles });
});

app.use("/articles/", articleRoute);

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
