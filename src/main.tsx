import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import Navbar from "./components/navbar.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/footer.tsx";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1D1D1D",
        },
        secondary: {
            main: "#D4D017",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Navbar />
            <div className="mt-[64px] bg-[#EDEDED]">
                <App />
                <Footer />
            </div>
        </ThemeProvider>
    </React.StrictMode>
);
