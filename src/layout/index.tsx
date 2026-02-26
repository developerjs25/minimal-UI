import { useState } from "react";
import Sidebar from "../components/ui/sidebar/index";
import { Box } from "@mui/material";
import Header from "../components/ui/header/index";

const Layout = ({ children }: any) => {
    const [open, setOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    const drawerWidth = open ? 300 : 90;

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" , }}>
            <Sidebar open={open} toggleSidebar={toggleSidebar} />
            <Box sx={{ flexGrow: 1, transition: "margin 0.2s", marginLeft: `${drawerWidth}px` }}>
                <Header />
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            </Box>
        </Box>

    );
};

export default Layout;  