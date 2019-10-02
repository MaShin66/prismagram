import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas" 

import path from "path";

// api 아래의 모든 폴더와 그 아래 모든 graphql 확장자 파일을 가져온다
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"))
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"))

const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
})

export default schema;