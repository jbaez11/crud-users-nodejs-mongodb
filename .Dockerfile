FROM node:16.15.1
WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT


ENV PORT $PORT


EXPOSE 3000
CMD ["node", "server.js"]