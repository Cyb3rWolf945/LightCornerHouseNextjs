import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";

export const Welcome = () => {
    return (
        <>
            <div className="flex flex-col gap-8 md:gap-4">

                <div id="WelcomeSection">
                    <Grid2 container spacing={2}>
                        <Grid2 md={7}>
                            <Image src="/Home/Welcome.png" />
                        </Grid2>
                        <Grid2 md={5} container direction="column" spacing={2} justifyContent={"center"}>
                            <Grid2 sx={{
                                textAlign: {
                                    xs: "center",
                                    md: "start",
                                },
                            }} >
                                <Typography className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "!text-4xl",
                                )} variant="h4">Welcome To Lisbon!</Typography>
                            </Grid2>
                            <Grid2 >
                                <Typography className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                                    "text-center",
                                    "md:text-left"
                                )} variant="body1">
                                    Come and explore the historic city of Lisbon while enjoying the traditionality of our cozy rooms in a simple yet elegant way. Lightcornerhouse is located in the typical neighborhood of Lisbon, enabling you to reach top attractions in minutes. Hope you enjoy!
                                </Typography>
                            </Grid2>
                            <Grid2 sx={{
                                alignSelf: {
                                    xs: "center",
                                    md: "flex-start",
                                },
                            }}>
                                <NextLink href={"/rooms"} passHref>
                                    <Button className="uppercase">
                                        <Typography variant="button">
                                            Take a look
                                        </Typography>
                                    </Button>
                                </NextLink>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </div>

                {/* Same thing inverted */}

                <Grid2 container spacing={2}>
                    <Grid2 sx={{
                        order: { xs: 2, md: 1 },
                    }} md={5} container direction="column" spacing={2} justifyContent={"center"}>
                        <Grid2
                            sx={{
                                textAlign: {
                                    xs: "center",
                                    md: "end",
                                },
                            }}>
                            <Typography className={clsx(
                                linkStyles({ color: "foreground" }),
                                "!text-4xl",
                            )} variant="h4">Welcome To Lisbon!</Typography>
                        </Grid2>
                        <Grid2 >
                            <Typography className={clsx(
                                linkStyles({ color: "foreground" }),
                                "data-[active=true]:text-primary data-[active=true]:font-medium",
                                "text-center",
                                "md:text-right"
                            )} variant="body1">
                                Come and explore the historic city of Lisbon while enjoying the traditionality of our cozy rooms in a simple yet elegant way. Lightcornerhouse is located in the typical neighborhood of Lisbon, enabling you to reach top attractions in minutes. Hope you enjoy!
                            </Typography>
                        </Grid2>
                        <Grid2 sx={{
                            textAlign: {
                                xs: "center",
                                md: "end",
                            },
                        }}>
                            <NextLink href={"/rooms"} passHref>
                                <Button className="uppercase">
                                    <Typography variant="button">
                                        Take a look
                                    </Typography>
                                </Button>
                            </NextLink>
                        </Grid2>
                    </Grid2>
                    <Grid2 sx={{
                        order: { xs: 1, md: 2 },
                    }} md={7}>
                        <Image src="/Home/tower.jpg" />
                    </Grid2>

                </Grid2>
            </div>


        </>



    )
}