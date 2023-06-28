#!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
git pull origin master
echo "New changes copied to server !"

echo "Installing Dependencies..."
# npm install --yes
npm install --ignore-scripts

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
# pm2 reload app_name/id
pm2 restart next-vps

echo "Deployment Finished!"
