import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import __dirname from './utils.js';
import {ApolloServer} from 'apollo-server-express'
import typeDefs from '../graphql/typeDefs.js';
import resolvers from '../graphql/resolver.js';
const app = express();

app.use(express.json());

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})
await apolloServer.start()
apolloServer.applyMiddleware({app})

const server = app.listen(8080,()=>console.log("Listening"))