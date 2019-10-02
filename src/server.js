// require("dotenv").config();
import "./env";

import { GraphQLServer } from "graphql-yoga";
import logger from 'morgan';
import schema from './schema';
import { sendSecretMail } from './utils';
import passport from "passport";
import "./passport";
import { authenticateJwt } from "./passport";
import { prisma } from "../generated/prisma-client";

// sendSecretMail("ubiquitous6666@gmail.com", "123")

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ 
    schema, 
    context: ({ request }) => ({ request })
});

server.express.use(logger("dev"));
// server.express.use(passport.authenticate("jwt")); 추후에 삭제
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => 
    console.log(`Server running http://localhost:${PORT}`)
);