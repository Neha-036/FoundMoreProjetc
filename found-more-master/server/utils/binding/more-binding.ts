import { FetchOptions } from "apollo-link-http"
import { createUploadLink } from "apollo-upload-client"
import { importSchema } from "graphql-import"
import { makeRemoteExecutableSchema } from "graphql-tools"
import * as fetch from "node-fetch"
import * as path from "path"
import { Binding } from "./generated"

/**
 * This class is an extension of the generated binding class that can actually
 * be exectuted. (Instead of having only type definitions like the Binding
 * class itself.)
 */
export class MoreBinding extends Binding {

  public token: string
  public uri: string

  constructor(uri: string, token?: string) {

    const typeDefs = importSchema(path.join(__dirname, "..", "..", "src", "schema.graphql"))

    const options: FetchOptions = {
      uri,
      fetch: fetch as any,
    }

    if (token) options.headers = { Authorization: `Bearer ${token}` }

    const schema = makeRemoteExecutableSchema({
      schema: typeDefs,
      link: createUploadLink(options),
    })

    // Invoke the constructor of `Binding` with the remote schema
    super({
      schema,
    })

    this.token = token
    this.uri = uri
  }

}
