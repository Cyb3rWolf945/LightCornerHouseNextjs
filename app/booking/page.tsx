"use client"
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Image } from "@nextui-org/image";
import { Calendar, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parseDate } from "@internationalized/date";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function Booking() {

    const [phone, setPhone] = useState('');
    let [InitialDate, setInitialDate] = useState(today(getLocalTimeZone()));
    let [FinallDate, setFinallDate] = useState(today(getLocalTimeZone()));

    const rooms = [
        { name: "LightCornerHouse 1" },
        { name: "LightCornerHouse 2" },
        { name: "LightCornerHouse 3" },
        { name: "LightCornerHouse 4" },
        { name: "LightCornerHouse 5" },
        { name: "LightCornerHouse 6" },
        { name: "LightCornerHouse 7" },
        { name: "LightCornerHouse 8" },
        { name: "LightCornerHouse 9" },
    ]




    return (
        <>
            <Grid2 container marginY={2}>
                <Image
                    className="object-cover dark:!opacity-70 w-[100vw] h-[25vw]"
                    src="/Booking/tram.jpg"
                    alt="Background Image"
                />
            </Grid2>
            <Grid2 marginY={2} textAlign={"center"} container direction={"column"}>
                <Typography variant="h4">
                    Online Booking
                </Typography>
                <Typography variant="body2">
                    Tell us a few details about your upcoming trip to Lisbon and we’ll get back to you as soon as we can with prices and availability.
                </Typography>
            </Grid2>

            <Grid2 marginY={2} gap={2} container direction={"column"}>
                <Input size={"md"} type="Name" label="Type your name" />
                <Input size={"md"} type="Email" label="Type your email" />
                <Select
                    size={"md"}
                    label="Select your room"
                >


                    {rooms.map((room, index) => (
                        <SelectItem key={index}>
                            {room.name}
                        </SelectItem>
                    ))}


                </Select>

                <Grid2 container justifyContent={"space-between"}>
                    <Grid2>
                        <Calendar
                            title="Select your initial date"
                            aria-label="Initial Date"
                            showMonthAndYearPickers
                            value={InitialDate}
                            minValue={today(getLocalTimeZone())}
                            onChange={setInitialDate}
                        />
                    </Grid2>
                    <Grid2>
                        <Calendar
                             title="Select your final date"
                            aria-label="Final Date"
                            showMonthAndYearPickers
                            value={InitialDate}
                            minValue={today(getLocalTimeZone())}
                            onChange={setInitialDate}
                        />
                    </Grid2>
                </Grid2>
            </Grid2>

        </>
    )
}