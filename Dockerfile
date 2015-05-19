FROM node:0.12

WORKDIR /www
ADD . /www/
RUN npm install

EXPOSE 3000

CMD node app.js
