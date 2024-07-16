FROM node as buildStage
WORKDIR /catch-me
COPY ./package*.json /catch-me/
RUN "npm install"
COPY . /catch-me/
RUN "npm run build"

FROM nginx
COPY --from=buildStage /catch-me/dist/ /usr/share/nginx/html
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "dev" ]