import { Container, Grid } from "@chakra-ui/react"

export const Features = ({ temperature, volume, packaging }) => {
    return (
        <Grid>
            {temperature}
            {volume}
            {packaging}
        </Grid>
    )
}