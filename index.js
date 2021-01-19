import {GraphQLServer}from "graphql-yoga"
import resolvers from  "./graphql/resolvers"

const server =  new GraphQLServer({
typeDefs:"graphql//schema.graphql",
resolvers:resolvers
})
/*SCHEMA 사용자에게 보내거나 사용자로부터 받을 DATA에대한 설명*/ 
server.start(()=> console.log("GraphQL"))