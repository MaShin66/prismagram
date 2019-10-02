import { prisma } from "../../../../generated/prisma-client"

export default {
    Query: {
        userById: async (_, args) => {
            const { id } = args;
            return await prisma.user({ id }).$fragment();
            // return await prisma.user({ id: id }); id 와 id 같은걸 위에처럼 표현 가능
        }
    }
}