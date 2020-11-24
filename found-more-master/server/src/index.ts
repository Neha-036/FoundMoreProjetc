import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { Prisma } from "./generated/prisma";
import resolvers from "./resolvers";

const typeDefs = importSchema(
  `./${process.env.NODE_ENV === "production" ? "dist" : "src"}/schema.graphql`
);

const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    `
    extend type User {
      storesConnection: StoreConnection
    }

    extend type Brand {
      storesConnection: StoreConnection
      usersConnection: UserConnection
    }
  `
  ],
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

const server = new ApolloServer({
  schema,
  playground: { version: "1.7.25" },
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
      debug: false, // log all GraphQL queries & mutations sent to the Prisma API
      secret: process.env.PRISMA_SECRET // only needed if specified in `prisma/prisma.yml` (value set in `.env`)
    })
  })
});

server.listen().then(({ port, subscriptionsUrl }) => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Subscription server is running on ${subscriptionsUrl}`);
});
