"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("@generated/type-graphql");
const client_1 = require("@prisma/client");
async function main() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: type_graphql_2.resolvers,
        validate: false,
    });
    const prisma = new client_1.PrismaClient();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: () => ({ prisma }),
    });
    const app = (0, express_1.default)();
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => console.log('server started on localhost:4000'));
}
main()
    .catch((e) => {
    throw e;
});
//# sourceMappingURL=index.js.map