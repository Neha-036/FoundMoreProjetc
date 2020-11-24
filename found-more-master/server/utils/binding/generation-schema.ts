import { importSchema } from "graphql-import"
import { makeExecutableSchema } from "graphql-tools"
import * as path from "path"

/**
 * Notice: We create a fake schema for the code generation. This schema cannot
 * be executed so can only be used for code generation.
 *
 * This schema is referenced in `.graphqlconfig.yml`
 */

const typeDefs = importSchema(path.join(__dirname, "..", "..", "src", "schema.graphql"))

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})

export default schema
