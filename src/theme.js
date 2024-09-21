import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
        main: "#fff",
        contrastText: "#212121"
        },
        secondary: {
        main: "#f44336",
        },
    },
});

export default theme;