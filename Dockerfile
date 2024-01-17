FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app/react-app/

COPY package.json .
RUN npm install

COPY . .
COPY src/assets/icons ./src/assets/icons

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]

FROM node:18-alpine as PRODUCTION_IMAGE

WORKDIR /app/react-app/

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
EXPOSE 8080

COPY package.json .
COPY vite.config.ts .
COPY src/assets/icons ./src/assets/icons

RUN npm install typescript
EXPOSE 8080
CMD ["npm","run","preview"]



