# Use Node.js base image
FROM node:20-slim

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install


# Copy the rest of the code
COPY . .

# Expose the app port
EXPOSE 3000


# Start the app
CMD ["node", "index.js"]
