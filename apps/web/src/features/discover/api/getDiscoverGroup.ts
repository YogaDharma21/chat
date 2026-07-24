import { z } from "zod";
import type { BaseResponse } from "../../../shared/types/response";
import { instantApiToken } from "../../../shared/utils/axios";

export const discoverGroupsSchema = z.array(
    z.object({
        id: z.string(),
        name: z.string(),
        about: z.string(),
        type: z.string(),
        room: z.object({ _count: z.object({ members: z.number() }) }),
        photo_url: z.string(),
    }),
);

export type DiscoverGroupsValues = z.infer<typeof discoverGroupsSchema>;

export const getDiscoverGroups = (
    query = "",
): Promise<BaseResponse<DiscoverGroupsValues>> =>
    instantApiToken.get(`/groups?name=${query}`).then((res) => res.data);
