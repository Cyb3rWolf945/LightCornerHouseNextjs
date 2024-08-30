import { getRoomByID } from "@/app/action";
import { RoomComponent } from "@/components/RoomsComponents/RoomComponent";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Page({ params }: { params: { id: string } }) {
    
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["roomByID"],
        queryFn: () => getRoomByID(params.id),
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
          <RoomComponent _id={params.id}/>
        </HydrationBoundary>
            )
  }