FROM node:latest as integracao
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build


FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=integracao app/dist/integracao /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t integracao .
# docker run -p 8081:80 integracao