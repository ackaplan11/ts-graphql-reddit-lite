import express from 'express'
//import {ApolloServer} from 'apollo-server-express'
//import { buildSchema } from 'graphql'


async function main() {
    //const schema = await buildSchema({})
    //const apolloServer = new ApolloServer({ schema })
    const app = express()
    //apolloServer.applyMiddleware({ app })
    app.listen(4000)
}

main()
  .catch((e) => {
    throw e
  })