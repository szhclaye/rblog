FROM node
ADD ./ /opt/app
WORKDIR /opt/app
RUN npm install
EXPOSE 8080

