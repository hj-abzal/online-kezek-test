FROM node:16-alpine

WORKDIR app
COPY . .

RUN yarn install
RUN yarn prebuild
RUN yarn build

CMD ["yarn", "start:prod"]