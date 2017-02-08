FROM node:6.5.0


# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app

RUN npm install nodemon -g
RUN npm install


# RUN mkdir -p /appuno
# ADD . /appuno

# WORKDIR /appuno

# RUN npm install nodemon -g

# COPY package.json /appuno/package.json
# RUN npm install

# COPY server.js /appuno
# RUN ls -la

EXPOSE 3000