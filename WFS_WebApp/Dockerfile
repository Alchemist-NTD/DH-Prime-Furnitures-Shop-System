FROM node:18.16.0-buster-slim

WORKDIR /app

COPY ./wfs .

RUN npm install && npx tailwindcss init

COPY ./wfs .

EXPOSE 3000

CMD ["npm", "start", "--no-inotify"]