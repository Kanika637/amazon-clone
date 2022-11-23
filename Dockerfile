FROM node:12-alpine
WORKDIR /amazon-clone
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 8001:3000


