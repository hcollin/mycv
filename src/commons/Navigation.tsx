import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";


const Navigation: FC = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: 'primary.main', height: "100%" }}>
            <h1>Henrik Collin</h1>
            <Stack direction={{ xs: "row", sm: "column" }} spacing={3}>
                <NavigationItem target="/">Home</NavigationItem>
                <NavigationItem target="/blog">Blog</NavigationItem>
                <NavigationItem target="/siteinfo">Site Info</NavigationItem>
                <NavigationItem target="/contact">Contact</NavigationItem>
            </Stack>
        </Box>
    );
}


const NavigationItem: FC<{ target: string, children?: React.ReactNode }> = ({ target, children }) => {
    return (
        <Link to={target} style={{ textDecoration: "none" }}><Typography sx={{ fontSize: "2rem", textAlign: "center", color: "primary.contrastText", textDecoration: "none" }}>{children}</Typography></Link>
    )
}

export default Navigation;