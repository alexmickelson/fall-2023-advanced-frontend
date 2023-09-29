install commands

```bash
npm init -y
npm install express
npm install typescript @types/node @types/express --save-dev
npx tsc --init
npm install ts-node nodemon --save-dev
```

install extension: humao.rest-client

docker:

docker build -t storage-api .
docker run -it --rm -p 3000:3000 storage-api
