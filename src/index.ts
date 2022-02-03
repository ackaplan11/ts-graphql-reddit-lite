import "reflect-metadata"
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { resolvers } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";




async function main() {
    const schema = await buildSchema({
      resolvers,
      validate: false,
    })
    const prisma = new PrismaClient();
    const apolloServer = new ApolloServer({ 
      schema,
      context: () => ({ prisma }), 
    })
    const app = express()
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
    app.listen(4000, () => console.log('server started on localhost:4000'))
}

main()
  .catch((e) => {
    throw e
  })