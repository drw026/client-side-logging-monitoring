const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('@elastic/elasticsearch')
const client = new Client({
    node: 'http://localhost:9200',
    auth: {
        username: 'elastic',
        password: 'test',
      },
})
const port = 3000;

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'pages')))

app.post('/error', async (req, res) => {
    const result = await client.index({
        index: 'test',
        body: {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
          },
    });

    res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});