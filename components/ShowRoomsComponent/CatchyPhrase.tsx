import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

export const CatchyPhrase = () => {
    return (
        <Grid2 marginY={4} container spacing={2} direction="column">
            <Grid2 alignSelf="center">
                <Typography
                    className={clsx(
                        linkStyles({ color: "foreground" }),
                        "!text-4xl"
                    )}
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: '1.5rem',  // Smaller font size for xs screens
                            md: '2rem',    // Default size for md screens and above
                        }
                    }}
                >
                    Rooms
                </Typography>
            </Grid2>
            <Grid2 alignSelf="center">
                <Typography
                    className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium",
                        "text-center"
                    )}
                    variant="body1"
                    sx={{
                        fontSize: {
                            xs: '0.75rem',  // Smaller font size for xs screens
                            md: '1rem',     // Body1 size for md screens and above
                        }
                    }}
                >
                   Every room is designed with traditional Lisbon style and contemporary comfort.
                </Typography>
            </Grid2>
        </Grid2>
    );
};
