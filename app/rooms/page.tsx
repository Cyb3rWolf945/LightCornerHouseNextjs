import { getRooms } from "../action";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { ShowRooms } from "@/components/ShowRoomsComponent/ShowRooms";
import { HeroShowRooms } from "@/components/ShowRoomsComponent/HeroShowRooms";
import { CatchyPhrase } from "@/components/ShowRoomsComponent/CatchyPhrase";

export default async function Page() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["rooms"],
        queryFn: () => getRooms(),
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <>
            <HeroShowRooms/>
            <CatchyPhrase/>
            <HydrationBoundary state={dehydratedState}>
                <ShowRooms/>
            </HydrationBoundary>
        </>
    );
}
