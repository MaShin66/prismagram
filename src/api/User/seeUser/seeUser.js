import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
      seeUser: async (_, args) => {
        const { username } = args;
        // return prisma.user({ username });
        const user = await prisma.user({ id });
        const posts = await prisma.user({ id }).posts();
        return {
          user,
          posts
        }
      }
    }
  };