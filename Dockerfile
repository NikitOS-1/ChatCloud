FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app/react-app/

COPY package.json .
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 7070

CMD ["yarn", "start"]

FROM node:18-alpine as PRODUCTION_IMAGE

WORKDIR /app/react-app/

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
EXPOSE 7070

COPY package.json .
COPY vite.config.ts .

RUN yarn add typescript
EXPOSE 7070
CMD ["yarn","run","preview"]



