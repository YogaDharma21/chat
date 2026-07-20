import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter }).$extends({
    result: {
        user: {
            photo_url: {
                needs: {
                    photo: true,
                },
                compute(data) {
                    if (data.photo) {
                        return `${process.env.URL_ASSET_PHOTO}${data.photo}`;
                    }
                    return null;
                },
            },
        },
        group: {
            photo_url: {
                needs: {
                    photo: true,
                },
                compute(data) {
                    if (data.photo) {
                        return `${process.env.URL_ASSET_GROUP_PHOTO}${data.photo}`;
                    }
                },
            },
        },
        roomMessage: {
            content_url: {
                needs: {
                    content: true,
                    type: true,
                },
                compute(data) {
                    if (data.type === "IMAGE") {
                        return `${process.env.URL_ASSET_ATTACH}/${data.content}`;
                    }

                    return data.content;
                },
            },
        },
    },
});

export default prisma;
