import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, RoleType } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
    const roles: RoleType[] = ["ADMIN", "MEMBER", "OWNER", "USER"];

    for (const role of roles) {
        const roleExist = await prisma.role.findFirst({
            where: {
                role: role,
            },
        });

        await prisma.role.upsert({
            where: {
                id: roleExist?.id ?? "",
            },
            create: {
                role: role,
            },
            update: {},
        });
    }

    console.log("Success seeding roles");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (err) => {
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    });
