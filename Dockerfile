FROM node:12-alpine
WORKDIR /amazon-clone
COPY . .
RUN npm install
CMD ["npm", "start"]
