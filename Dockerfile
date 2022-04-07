
FROM node AS builder

WORKDIR /ProjectAngular

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.13.12-alpine

RUN ["chmod", "+x", "/usr/src/app/docker-entrypoint.sh"]

COPY --from=builder /ProjectAngular/dist/ProjectAngular /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'