FROM node:11.1.0-alpine
WORKDIR /TravelAgency
ADD package.json TravelAgency/
RUN npm install
EXPOSE 8080
ADD . /TravelAgency

CMD ["npm", "start"]