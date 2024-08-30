"use client";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Caroussel } from "./Caroussel";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Button, Divider, RangeCalendar } from "@nextui-org/react";
import { getRoomByID } from "@/app/action";
import { MapComponent } from "./MapComponent";
import { Loader } from "../loader";
import { useState } from "react";
import { today, getLocalTimeZone } from '@internationalized/date';
import NextLink from "next/link";


// Dynamically import the MapContainer component to prevent SSR
const DynamicMap = dynamic(() => import("./MapComponent").then((mod) => mod.MapComponent), {
    ssr: false,
});

export const RoomComponent = ({ _id }: RoomComponentProps) => {
    const { data: room, error, isLoading } = useQuery<houseModel>({
        queryKey: ["room", _id],
        queryFn: () => getRoomByID(_id),
    });

    let [value, setValue] = useState({
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 }),
    });

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        console.error('Error fetching room:', error); // Detailed logging
        return <h2>{error.message}</h2>;
    }

    if (room) {
        return (
            <>
                {/* Title AREA */}
                <Grid2 justifyContent={"center"} container marginY={2}>
                    <Typography className={clsx(
                        linkStyles({ color: "foreground" }),
                        "!text-4xl md:!text-5xl",
                        "mb-2"
                    )} variant="h3">
                        {room.title}
                    </Typography>
                </Grid2>

                {/* Carousel AREA */}
                <Grid2 container justifyContent={"center"} marginY={2}>
                    <Caroussel Photos={room.photos} />
                </Grid2>

                {/* ICONS AREA */}
                {/* <Grid2
                    sx={{
                        textAlign: {
                            xs: "center",
                            md: "start",
                        },
                    }}
                    container justifyContent={"center"} marginY={2}>
                    <Typography className={clsx(
                        linkStyles({ color: "foreground" }),
                        "!text-3xl",
                    )} variant="h3">
                        some of our accommodations
                    </Typography>
                </Grid2> */}

                <Grid2 alignItems={"center"} container marginY={2}>
                    <Grid2
                        sx={{
                            textAlign: {
                                xs: "center",
                                md: "start",
                            },
                        }}
                        direction={"column"}
                        md={5}
                    >
                        <Typography
                            className={clsx(
                                linkStyles({ color: "foreground" }),
                                "!text-4xl",
                                "mb-2"
                            )}
                            variant="h3"
                        >
                            Description
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: {
                                    xs: "center",
                                    md: "start",
                                },
                            }}
                            className={clsx(
                                linkStyles({ color: "foreground" }), "text-center md:text-justify")}
                            variant="body1"
                        >
                            {room.description}
                        </Typography>
                    </Grid2>

                    {/* Divider */}
                    <Grid2 md={2} display="flex" justifyContent="center">
                        <Divider orientation="vertical" />
                    </Grid2>

                    {/* Form AREA */}
                    <Grid2 justifyContent={"center"} spacing={2} md={5} marginY={2} container>
                        <Grid2 textAlign={"center"} md={6}>
                            <RangeCalendar
                                aria-label="Date (Controlled)"
                                value={value}
                                onChange={setValue}
                            />
                        </Grid2>
                        <Grid2 textAlign={"center"} alignContent={"center"} md={6}>
                            <NextLink href="/booking">
                                <Button
                                    size="lg"
                                    radius="lg"
                                    className={clsx(
                                        linkStyles({ color: "foreground" }),
                                        "data-[active=true]:text-primary data-[active=true]:font-medium",
                                        "uppercase"
                                    )}
                                    color="warning">
                                    Book Now
                                </Button>
                            </NextLink>
                        </Grid2>
                    </Grid2>
                </Grid2>

                {/* Comments AREA */}
                <Grid2 marginY={2} container>

                </Grid2>

                {/* Map AREA */}
                <Grid2 marginY={2}>
                    {/* Load map component only on client side */}
                    <DynamicMap roomTitle={room.title} marker={room.marker} />
                </Grid2>
            </>
        );
    }
};

interface RoomComponentProps {
    _id: string;
}

export interface houseModel {
    _id: string;
    title: string;
    defaultImg: string;
    description: string;
    comments: Comment[];
    location: string;
    photos: string[];
    rating: number;
    space: string;
    lastOne: boolean;
    marker: string;
}

export interface Comment {
    text: string;
    author: string;
    rating: number;
}
