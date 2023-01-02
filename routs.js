/** @format */

const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h2>Home Page<br><a href="/api/products">products</a></h2>');
});
app.get('/api/products', (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('<h1>Product does not exist </h1>');
  }
  return res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
  const { productID, reviewID } = req.params;
  res.send('<h1>review Page</h1>');
  console.log(req.params);
});

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  // res.send('Hello World');
  return res.status(200).send(sortedProducts);
});

app.listen(5000, () => {
  console.log('Server Listening at port 5000....');
});
