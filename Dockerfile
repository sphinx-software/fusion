FROM node:carbon

WORKDIR /usr/src/server

COPY package.json /usr/src/server
COPY package-lock.json /usr/src/server

RUN npm install
