import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
      me: async (_, __, { request, isAuthenticated }) => { // _는 자신의 arg, __ 는 부모의 arg 뜻함
        isAuthenticated(request);
        const { user } = request;
        const userProfile = await prisma.user({ id: user.id });
        const posts = await prisma.user({ id: user.id }).posts();
        return {
          user: userProfile,
          posts
        };
      }
    }
  };