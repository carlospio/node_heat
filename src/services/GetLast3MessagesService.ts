import prismaClient from "../prisma";


class GetLastMessageService {
  async execute() {
    const messages = await prismaClient.message.findMany({
        take: 3,
        orderBy:{
            created_at: "desc"
        },
        include: {
            user: true,
        },
    });



    // Select * FROM MESSAGES LIMIT 3 ORDER BY CREATE_AT DESC
    return messages;
  }
}

export { GetLastMessageService };