const { Client } = require('@elastic/elasticsearch');
const client = new Client({
    node: 'http://elasticsearch:9200',
    auth: {
        username: 'elastic',
        password: 'test',
    },
})

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

exports.sendToElasticsearch = sendToElasticsearch;
