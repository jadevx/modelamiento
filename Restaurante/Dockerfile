FROM node:20

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 8087
CMD ["npm", "run", "dev", "--", "--host"]
