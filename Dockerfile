# Docker Image that we want to use to create custom Image
FROM node:10

# Directory to hold the app code inside the image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .


EXPOSE 3000

# Command to run our app
CMD ["npm", "start"]