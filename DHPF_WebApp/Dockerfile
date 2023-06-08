FROM node:18.16.0-buster-slim

WORKDIR /app

COPY ./dhpf .

RUN npm install && npx tailwindcss init

COPY ./dhpf .

EXPOSE 3000

CMD ["npm", "start", "--no-inotify"]