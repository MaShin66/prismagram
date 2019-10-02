import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        requestSecret: async (_, args) => {
            const { email } = args;
            const loginSecret = generateSecret();
            console.log(loginSecret);
            try {
                await sendSecretMail(email, loginSecret); // 추후에 추가
                await prisma.updateUser({ data: { loginSecret }, where: { email }});
                return true;
            } catch (error) {
                return false;
            }

        }
    }
}