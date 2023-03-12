### Dockerfile - PreConfigurado 
#
# docker build -t smagarinos89/wild-frontend-prj01 .
# docker push smagarinos89/wild-frontend-prj01
#
FROM node:19

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

RUN npm install

COPY --chown=node:node . .
USER node

EXPOSE 3000
CMD [ "node", "index.js" ]
