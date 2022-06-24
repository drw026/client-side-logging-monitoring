# Client side error logging and monitoring with Elasticsearch and Kibana
Logging errors and send them to Elasticsearch which can them be visualized by Kibana.

This repository is created for Incentro Interactive frontend meetup 7/7/2022 to demo client side error logging and monitoring
with Elasticsearch and Kibana.

### Start
Run `make start` to startup 3 docker containers. (Elasticsearch, Kibana, Webserver).

When containers are all started, go to `http://localhost:5601` to open Kibana and `http://localhost:3000` to open the test page.

**NOTE: the webserver serves pages and act as logserver (`/error` endpoint).**


