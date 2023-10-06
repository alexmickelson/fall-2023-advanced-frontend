FROM node:20 as build

ARG USER_ID=1000
ARG GROUP_ID=1000

ENV USER_ID=$USER_ID
ENV GROUP_ID=$GROUP_ID

RUN useradd -id $USER_ID -groupid $GROUP_ID developer

USER developer

WORKDIR /app
# runtime requirement: mount code to /app directory

RUN npm install && npm start
