### Dockerfile - PreConfigurado 
#
# docker build -t smagarinos89/talkap-frontend .
# docker push smagarinos89/talkap-frontend
#
# Use a Node.js base image
# Definimos la imagen base de Docker que utilizaremos para construir nuestro contenedor
FROM node:19-alpine AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

FROM node:19-alpine
WORKDIR /app
RUN mkdir build
COPY --from=build /build/build/ build
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]