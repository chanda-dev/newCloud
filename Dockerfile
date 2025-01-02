FROM node:20-alpine

WORKDIR /app

# Install bash explicitly for Alpine Linux
RUN apk add bash

COPY . .
RUN yarn install --production

CMD ["node", "src/index.js"]

EXPOSE 3000