#!/bin/sh

echo "Starting npm install"
npm config set cache /usr/src/app/.npm --global
npm install

echo "Done."

exec "$@"
