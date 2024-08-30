"use client"
import { getRooms } from "@/app/action";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { Image } from "@nextui-org/image";
import { Rating, Typography } from "@mui/material";
import NextLink from "next/link";
import NextImage from "next/image";

export const ShowRooms = () => {

    const { data, error, isFetched } = useQuery({
        queryKey: ["rooms"],
        queryFn: () => getRooms(),
    });

    if (error) {
        console.error('Error fetching rooms:', error); // Detailed logging
        return <h2>{error.message}</h2>;
    }

    if (isFetched && data)
        return (
            <Grid2 container spacing={2} direction="column">
                {data.map((room: any, index: number) => (
                    <Grid2 key={index} xs={12}>
                        <Card shadow="sm">
                            <CardBody>
                                <Grid2 container spacing={2}>
                                    <Grid2 xs={12} sm={5} sx={{ height: "100%", width: "100%", maxWidth: "!none" }}>
                                        <Image as={NextImage}
                                        width={500}
                                        height={300} 
                                            src={`/Rooms/ShowRooms/${room.mainPhoto}.png`}
                                            className="!h-48 !w-full object-cover !max-w-none"
                                            alt={room.title}
                                        />
                                    </Grid2>
                                    <Grid2 xs={12} sm={7} direction="column">
                                        <Grid2 xs={12} sx={{
                                            marginBottom: 2, textAlign: {
                                                xs: "center",
                                                md: "start",
                                            },
                                        }}>
                                            <Typography variant="h4">{room.title}</Typography>
                                        </Grid2>
                                        <Grid2 xs={12} sx={{ marginBottom: 2 }}>
                                            <Typography variant="body2" sx={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                WebkitLineClamp: 4, // Number of lines to show
                                                height: "5rem" // Adjust based on line height
                                            }}>
                                                {room.description}
                                            </Typography>
                                        </Grid2>

                                        {/* Button and rating  */}
                                        <Grid2 justifyContent="space-between" container spacing={2}>
                                            <Grid2>
                                                <NextLink href={`/rooms/${room._id}`} passHref>
                                                    <Button variant="bordered" color="warning" className="uppercase">
                                                        <Typography variant="button">
                                                            Explore now
                                                        </Typography>
                                                    </Button>
                                                </NextLink>
                                            </Grid2>
                                            <Grid2 >
                                                <Rating name="read-only" value={room.rating} readOnly />
                                            </Grid2>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </CardBody>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        );

    return <div>Loading...</div>;
}