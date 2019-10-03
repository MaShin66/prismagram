import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation: {
        confirmSecret: async (_, args) => {
            const { email, secret } = args;
            const user = await prisma.user({ email }); // email 같은 것 끼리 찾아서

            if(user.loginSecret === secret) {
                await prisma.updateUser({ // 로그인 후에 시크릿 없애주는
                    where: { id: user.id },
                    data: {
                        loginSecret: ""
                    }
                });
                return generateToken(user.id);
            } else {
                throw Error("Wrong email/secret combination");
            }
        }
    }
}