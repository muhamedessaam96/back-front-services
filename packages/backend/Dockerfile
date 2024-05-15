FROM node:20-alpine
WORKDIR /backend/
COPY package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "start"]
