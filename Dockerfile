FROM node as buildStage
WORKDIR /catch-me
COPY ./package*.json /catch-me/
RUN npm install
COPY . /catch-me/
RUN npm run build

FROM nginx:stable-perl
COPY --from=buildStage /catch-me/dist/ /usr/share/nginx/html