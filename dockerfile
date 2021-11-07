FROM node:17.0-alpine3.12
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci --only=production && npm cache clean --force
COPY . /app
EXPOSE 8080
CMD ["node", "server.js"]