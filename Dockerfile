# Stage 1: Build dependencies
FROM node:18 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Run app
FROM node:18
WORKDIR /app
COPY --from=builder /usr/src/app ./
EXPOSE 3000
CMD ["npm", "start"]
