<<<<<<< Updated upstream
## creation du dossier dist qui contient le projet 
FROM node:latest as node     
=======
# Create image based on the official Node 10 image from dockerhub
FROM node:latest

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
>>>>>>> Stashed changes
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

## run application
FROM nginx:alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html

<<<<<<< Updated upstream
=======
# Serve the app
CMD ["npm", "start"]
>>>>>>> Stashed changes
