# Client side error logging and monitoring with Elasticsearch and Kibana
Logging errors and send them to Elasticsearch which can them be visualized by Kibana.

This repository is created for Incentro Interactive frontend meetup 29/06/2022.

### Setup
Run `make start` to startup 3 docker containers. (Elasticsearch, Kibana, Webserver). NOTE: the webserver serves the
pages and also serves logserver (`/error` endpoint).
