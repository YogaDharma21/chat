import { useQuery } from "@tanstack/react-query";
import { getDiscoverGroups } from "../api/getDiscoverGroup";

export const useDiscoverGroup = (isEnabled: boolean, name = "") => {
    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["search-group", name],
        queryFn: () => getDiscoverGroups(name),
        select: (data) => data.data,
        enabled: isEnabled,
    });

    return {
        data,
        isLoading,
        isError,
        error,
    };
};
