FROM mhart/alpine-node:6.2.1
WORKDIR /src
ADD . .
EXPOSE 80
CMD ["npm", "run", "start:prod"]
