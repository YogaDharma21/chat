import * as chatRepo from "../repositories/chatRepositories";

export const createRoomPersonal = async (
    sender_id: string,
    receiver_id: string,
) => {
    return await chatRepo.createRoomPersonal(sender_id, receiver_id);
};

export const getRecentRooms = async (userId: string) => {
    return await chatRepo.getRooms(userId);
};

export const getRoomMessages = async (roomId: string) => {
    return await chatRepo.getRoomMessages(roomId);
};
