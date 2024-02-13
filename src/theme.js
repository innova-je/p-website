import { createTheme } from "@mui/material";

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2" />

export const theme = createTheme({
    typography: {
        fontFamily: 'Exo 2, sans-serif',
        fontSize: 16
    },
    palette:{
        primary:{
            main: "#732043",
        },
        secondary:{
            main: "#052533"
        },
    }
})