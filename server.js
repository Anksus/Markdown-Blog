const express = require("express");
const app = express();
const articleRoute = require("./routes/articles");

const port = 3000;

app.set("view engine", "ejs");
app.use("/articles/", articleRoute);
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

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
