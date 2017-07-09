FROM node:latest
ADD ./src /code
WORKDIR /code
RUN ["npm", "i"]
CMD sh
