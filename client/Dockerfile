# Build stage - could use maven or our image
FROM node:latest as builder

ENV BUILD_DIR= /app
RUN mkdir $BUILD_DIR
WORKDIR $BUILD_DIR

COPY . .

RUN npm clean install

CMD ["npm", "Run", "Build"]

FROM nginx:1.17.8 as server

ENV APP_HOME=/usr/share/nginx/html
WORKDIR $APP_HOME

COPY --from=builder /app/build/* $APP_HOME


