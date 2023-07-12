const express = require("express");
const productRouter = require("./routes/productRoutes");

const app = express();

app.use(express.json());

app.use("/api/products", productRouter);

app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use((req, res, next) => {
  console.log(req.headers);
  console.log(req.body);
  next();
});

/*fetch("http://localhost:8080/api/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Sample Dress1",
    description: "This is a sample dress",
    price: 100,
    published: true,
    category: "Formal",
  }),
});*/

module.exports = app;
