# Use an official Node.js runtime as a base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files into the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]