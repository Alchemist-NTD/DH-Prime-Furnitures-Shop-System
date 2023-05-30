FROM node:18.16.0-buster-slim

WORKDIR /app

COPY . .

RUN cd wfs && npm install

RUN cd wfs && npx tailwindcss init

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--no-inotify"]