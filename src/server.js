const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const { sendToElasticsearch } = require('./util/sendToElasticsearch');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'pages')))

app.post('/error', async (req, res) => {
    await sendToElasticsearch('error', {
        '@timestamp': new Date().toISOString(),
        level: 'error',
        message: req.body.message,
        context: req.body.context,
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
