FROM node:18-alpine AS build

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile --production=false

COPY . .

ENV NODE_ENV=production

RUN yarn build

RUN rm -rf node_modules && yarn install --production=true

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production

EXPOSE 1337

CMD ["yarn", "start"]
