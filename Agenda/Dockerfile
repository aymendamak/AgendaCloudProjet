## creation du dossier dist qui contient le projet 
FROM node:latest as node     
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

## run application
FROM nginx:alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html

