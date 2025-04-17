# Base image of Node
FROM node:18-alpine

# Working dir inside this docker container
WORKDIR /app

# Copy dependencies first
COPY package.json package-lock.json* ./

# Install Dep
RUN npm install

# Copy the rest
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 3000

# Start app
CMD ["npm","start"]
