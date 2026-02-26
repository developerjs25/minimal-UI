import { Box, List, ListItemButton, ListItemText, IconButton, Typography, Collapse, } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Images from "../../../constants/Images";
import type { SidebarProps } from "../../../Types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { userItems } from "../Contant";


const Sidebar: React.FC<SidebarProps> = ({ open, toggleSidebar }) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [openUser, setOpenUser] = React.useState(true);
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <Box sx={{ position: "fixed", top: 0, left: 0, width: open ? 300 : 90, height: "100vh", display: "flex", flexDirection: "column", borderRight: "1px solid #ebeaea", transition: "width 0.3s", bgcolor: "#fff", zIndex: 1200, }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 2.6, px: 3.3, pb: 1, flexShrink: 0, position: "relative", }}>
                <Typography variant="h6" sx={{ width: 40 }}>
                    <Box component="img" src={Images.Mainlogo} alt="Logo" sx={{ width: 40, height: 40, color: "#5BE49B" }} />
                </Typography>
                <IconButton onClick={toggleSidebar} disableRipple sx={{ position: "absolute", top: 34, right: 0, transform: "translate(50%, -50%)", width: 25, height: 25, borderRadius: "50%", border: "1px solid #e7e7e7", bgcolor: "#fff", zIndex: 1300, transition: "all 0.3s ease", "&:hover": { backgroundColor: "#eeeeee" }, }}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Box>
            <Box sx={{ flex: 1, overflowY: "auto", px: open ? 2 : 0, scrollbarWidth: "thin", scrollbarColor: "#00A76F #f1f1f1", }}>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ flexDirection: open ? "row" : "column", px: 1.8, borderRadius: 2, mb: 0.5, "&:active": { backgroundColor: "rgba(0 167 111 / 16%)", }, "&:focus": { backgroundColor: "rgba(0 167 111 / 16%)", color: "#00A76F", filter: "invert(46%) sepia(69%) saturate(413%) hue-rotate(115deg) brightness(90%) contrast(90%)" }, }}>
                        <Box component="img" src={Images.Dashboard} alt="Dashboard" sx={{ width: 24, height: 24, mr: open ? 1 : 0 }} />
                        <ListItemText onClick={() => navigate("/dashboard")} primary="Dashboard" primaryTypographyProps={{ fontSize: open ? "0.875rem" : "0.75rem", fontWeight: 600, color: "#637381", }} />
                    </ListItemButton>
                    <ListItemButton onClick={() => setOpenUser(!openUser)} onMouseEnter={() => !open && setHoveredItem("Users")} onMouseLeave={() => !open && setHoveredItem(null)} sx={{ flexDirection: open ? "row" : "column", px: 1.8, borderRadius: 2, mb: 0.5, "&:active": { backgroundColor: "rgba(0 167 111 / 16%)", }, "&:focus": { backgroundColor: "rgba(0 167 111 / 16%)", color: "#00A76F", filter: "invert(46%) sepia(69%) saturate(413%) hue-rotate(115deg) brightness(90%) contrast(90%)" }, }}>
                        <Box component="img" src={Images.Profileicon} alt="Users" sx={{ width: 24, height: 24, mr: open ? 1 : 0 }} />
                        <ListItemText primary="Users" primaryTypographyProps={{ fontSize: open ? "0.875rem" : "0.75rem", fontWeight: 600, color: "#637381", }} />
                        {open && (openUser ? <ExpandMoreIcon /> : <ChevronRightIcon />)}
                    </ListItemButton>
                    {open && (
                        <Collapse in={openUser} timeout="auto" unmountOnExit>
                            <Box sx={{ position: "relative", ml: 5, mt: 0.5, }}>
                                <Box sx={{ position: "absolute", left: 0, top: -3, bottom: 25, width: "2px", backgroundColor: "#e5e7eb", }} />
                                {userItems.map((item) => (
                                    <Box key={item.path} sx={{ position: "relative", pl: 2, }}>
                                        <Box sx={{ position: "absolute", left: 0, top: 5, width: 16, height: 16, borderLeft: "2px solid #e5e7eb", borderBottom: "2px solid #e5e7eb", borderBottomLeftRadius: "8px", }} />
                                        <ListItemButton onClick={() => navigate(item.path)}
                                            selected={location.pathname === item.path} sx={{ py: 0.4, my: 0.4, minHeight: 36, borderRadius: 1, "&:focus": { backgroundColor: "#e5e7eb" }, }}>
                                            <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, color: "#374151", }} />
                                        </ListItemButton>
                                    </Box>
                                ))}
                            </Box>
                        </Collapse>
                    )}
                    <ListItemButton sx={{ flexDirection: open ? "row" : "column", px: 1.8, borderRadius: 2, mb: 0.5, "&:active": { backgroundColor: "rgba(0 167 111 / 16%)", }, "&:focus": { backgroundColor: "rgba(0 167 111 / 16%)", color: "#00A76F", filter: "invert(46%) sepia(69%) saturate(413%) hue-rotate(115deg) brightness(90%) contrast(90%)" }, }}>
                        <Box component="img" src={Images.Analytics} alt="Analytics" sx={{ width: 24, height: 24, mr: open ? 1 : 0 }} />
                        <ListItemText primary="Analytics" primaryTypographyProps={{ fontSize: open ? "0.875rem" : "0.75rem", fontWeight: 600, color: "#637381", }} />
                    </ListItemButton>
                </List>
            </Box>
            {!open && hoveredItem && (
                <Box sx={{ position: "fixed", left: 90, top: 'calc(50px + 64px)', width: 160, bgcolor: "white.main", borderRadius: 2, boxShadow: "0 8px 16px rgba(0,0,0,0.12)", p: 1.5, zIndex: 1500, display: "flex", flexDirection: "column", gap: 1, backgroundImage: ` url('src/assets/images/download (1).svg'),  url('src/assets/images/download.svg')`, backgroundPosition: "top right, bottom left", backgroundRepeat: "no-repeat, no-repeat", backgroundSize: "100px 100px, 100px 100px", userSelect: "none", pointerEvents: "auto", }} onMouseEnter={() => setHoveredItem("Users")} onMouseLeave={() => setHoveredItem(null)}>
                    {userItems.map((item) => (
                        <Box key={item.path} onClick={() => navigate(item.path)} sx={{ fontSize: 14, color: "#374151", cursor: "pointer", paddingY: 0.5, px: 1, borderRadius: 1, "&:hover": { bgcolor: "rgba(0, 167, 111, 0.1)", color: "#00A76F", }, transition: "background-color 0.2s, color 0.2s", }}>
                            {item.label}
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Sidebar;
