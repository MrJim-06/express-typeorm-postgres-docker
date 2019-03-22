FROM node:8.15.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY resources/local/db/*.sql /docker-entrypoint-initdb.d/

COPY . /usr/src/app

EXPOSE 3000
