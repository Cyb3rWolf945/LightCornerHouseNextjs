import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Spinner } from "@nextui-org/react"

export const Loader = () => {
    return (
        <Grid2 marginY={6} container justifyContent={"center"}>
            <Spinner size="lg" color="warning"/>
        </Grid2>
    )
}