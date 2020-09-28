const express = require("express");
const app = express();
const articleRoute = require("./routes/articles");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/Markdown", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to database"));

const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const articles = [
    {
      title: "test title",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "test article 2",
      createdAt: new Date(),
      description: "test descption 2",
    },
  ];

  res.render("articles/index", { articles: articles });
});

app.use("/articles/", articleRoute);

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
