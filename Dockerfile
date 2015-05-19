FROM node:0.12

WORKDIR /www
COPY package.json /www/
RUN npm install

EXPOSE 3000

CMD node app.js
