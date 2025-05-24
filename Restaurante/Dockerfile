# Find the latest digests at https://hub.docker.com/_/node and https://hub.docker.com/_/nginx

FROM node:20@sha256:6e6e8b6e7e2d3e1b2e7e2e6e8b6e7e2d3e1b2e7e2e6e8b6e7e2d3e1b2e7e2e6e AS builder

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine@sha256:7e7e8b6e7e2d3e1b2e7e2e6e8b6e7e2d3e1b2e7e2e6e8b6e7e2d3e1b2e7e2e6e
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
