#!/bin/bash

# Navigate to the project directory
cd /home/ubuntu/projects/testlive/

#stop old running app
pm2 stop apis

# Pull the latest changes from Bitbucket
git pull origin main

# Install project dependencies
npm install

# Build the project if necessary
# Add any build commands specific to your project (e.g., webpack, TypeScript compilation)

# Restart the Node.js application
#pm2 restart apis
pm2 start apis
