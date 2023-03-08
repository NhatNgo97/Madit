FROM node:lts-alpine
ENV NODE_ENV=development
ENV BASE_URL_FRONT_END = http://localhost:3000
ENV JWT_ACCESS_KEY = abcdefgh
ENV JWT_REFRESH_KEY = 123456
ENV MONGODB_URL = mongodb+srv://nhatngo9799:tahnhnim97@maditcluster.bynhu1t.mongodb.net/Madit?retryWrites=true&w=majority
ENV CLOUDINARY_API_KEY = 671668894573891
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
