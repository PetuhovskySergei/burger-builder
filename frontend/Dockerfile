FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

FROM node:14-alpine AS production
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .
RUN npm build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]