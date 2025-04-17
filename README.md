This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Dev Setup(Need Node installed)

**Install all missing dependencies**\
`npm install`

**Start up development environment**\
`npm run dev`

## Production Setup (Ensure you have docker installed)

`docker build -t charity-connect .`

`docker run -p 3000:3000 charity-connect`
