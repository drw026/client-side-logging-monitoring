FROM node:14.16-alpine

# Prerequisites for Extensions
RUN apk update && \
    apk add supervisor

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

# Configure Supervisor
COPY .infra/supervisord.conf /etc/supervisord.conf

# Setup workdir
WORKDIR /usr/src/app

COPY .infra/entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
