FROM node:latest

RUN mkdir -p /
WORKDIR /

COPY package.json /
RUN npm install
COPY . /

RUN ./node_modules/typescript/bin/tsc -p ./tsconfig.json
CMD ["node", "src/mod.js"]
