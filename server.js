const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('@elastic/elasticsearch');
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

const sendToElasticsearch = async (index, entry) => {
    const date = new Date();
    const month = String(date.getMonth()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    await client
        .index({
            index: `${index}-${date.getFullYear()}.${month}.${day}`,
            body: entry,
        })
        .catch((error) => console.log(error.message));
};

app.post('/error', async (req, res) => {
    sendToElasticsearch('error', {
        '@timestamp': new Date().toISOString(),
        level: 'error',
        message: req.body.message,
        request: {
            method: req.method,
            url: req.url,
            useragent: req.headers ? req.headers['user-agent'] : '',
            clientIp: req.ip,
        },
        response: {
            statusCode: res.statusCode,
            responseTime: res.responseTime,
        }
    });

    res.send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
