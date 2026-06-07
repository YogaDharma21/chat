import { groupFreeValues } from "../utils/schema/group";
import * as groupRepositories from "../repositories/groupRepositories";

export const createFreeGroup = async (
    data: groupFreeValues,
    photo: string,
    user_id: string,
) => {
    const group = await groupRepositories.createFreeGroup(data, photo, user_id);
    return group;
};
