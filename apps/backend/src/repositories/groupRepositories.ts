import prisma from "../utils/prisma";
import { groupFreeValues } from "../utils/schema/group";
import * as userRepositories from "./userRepositories";

export const createFreeGroup = async (
    data: groupFreeValues,
    photo: string,
    user_id: string,
) => {
    const owner = await userRepositories.findRole("OWNER");
    return await prisma.group.create({
        data: {
            photo,
            name: data.name,
            about: data.about,
            price: 0,
            type: "FREE",
            room: {
                create: {
                    created_by: user_id,
                    name: data.name,
                    members: {
                        create: {
                            user_id: user_id,
                            role_id: owner.id,
                        },
                    },
                    is_group: true,
                },
            },
        },
    });
};
