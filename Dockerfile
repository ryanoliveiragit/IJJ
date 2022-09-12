FROM node:18-alpine3.15

WORKDIR /appnode

COPY . . 

EXPOSE 3000

RUN npm install next

ENTRYPOINT npm run dev

