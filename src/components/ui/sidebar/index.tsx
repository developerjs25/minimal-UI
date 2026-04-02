import { List, ListItemText, Typography, Collapse, Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Images from "../../../constants/Images";
import { productItems, userItems, orderItems } from "../Contant";
import { Drawer } from "@mui/material";
import { SidebarWrapper, SidebarHeader, ToggleButton, SidebarContent, SidebarItem, SubMenuWrapper, SubMenuLine, SubMenuItemWrapper, SubMenuCurve, HoverPopup, }
    from "./SideBarStyle";
import { useTheme } from "@mui/material/styles";
import { Logosvg } from "../../svgs";

const Sidebar = ({ open, toggleSidebar, isMobile }: any) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const navigate = useNavigate();
    const location = useLocation();
    const drawerWidth = open ? 300 : 90;
    const theme = useTheme();

    const handleHover = (event: any, type: string) => {
        if (!open) {
            const rect = event.currentTarget.getBoundingClientRect();

            setPopupPosition({
                top: rect.top,
                left: rect.right,
            });

            setHoveredItem(type);
        }
    };

    const handleMenuToggle = (menu: string) => {
        setOpenMenu((prev) => (prev === menu ? null : menu));
    };

    const getTextStyles = (open: boolean) => ({
        color: "#637381",
        fontSize: open ? "0.875rem" : "0.7rem",
        textAlign: open ? "left" : "center",
    });

    return (
        <Drawer variant={isMobile ? "temporary" : "permanent"} open={open} onClose={toggleSidebar} sx={{ width: drawerWidth, "& .MuiDrawer-paper": { width: drawerWidth, transition: "width 0.2s", }, }}>
            <SidebarWrapper open={open} sx={{ backgroundColor: theme.palette.background.default }}>
                <SidebarHeader>
                    <Typography variant="h6" sx={{ width: 40, color: "green.main" }}>
                        <Logosvg />
                    </Typography>
                    {!isMobile && (
                        <ToggleButton onClick={toggleSidebar} disableRipple>
                            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </ToggleButton>
                    )}
                </SidebarHeader>
                <SidebarContent open={open}>
                    <List disablePadding>
                        <SidebarItem open={open}>
                            <Box component="img" src={Images.Dashboard} width={24} marginRight={1} />
                            <ListItemText onClick={() => navigate("/dashboard")} primary="Dashboard" 
                            primaryTypographyProps={{ sx: { color: "#637381", fontSize: open ? "17px" : "13px" }, }} />
                        </SidebarItem>
                        <SidebarItem
                            open={open}
                            onClick={() => handleMenuToggle("user")}
                            onMouseEnter={(e) => handleHover(e, "user")}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Box component="img" src={Images.Usericon} width={24} marginRight={1} />
                            <ListItemText primary="User" primaryTypographyProps={{ sx: { color: "#637381", fontSize: open ? "17px" : "13px" }, }} />

                            {open &&
                                (openMenu === "user" ? (
                                    <ExpandMoreIcon sx={{ color: "#637381" }} />
                                ) : (
                                    <ChevronRightIcon sx={{ color: "#637381" }} />
                                ))}
                        </SidebarItem>

                        {open && (
                            <Collapse in={openMenu === "user"}>
                                <SubMenuWrapper>
                                    <SubMenuLine />
                                    {userItems.map((item) => (
                                        <SubMenuItemWrapper key={item.path}>
                                            <SubMenuCurve />
                                            <SidebarItem open selected={location.pathname === item.path}
                                                onClick={() => navigate(item.path)}
                                                sx={{ py: 0.4, my: 0.4, minHeight: 36, borderRadius: 1, color: "#637381", fontSize: open ? "0.875rem" : "0.75rem", }}>
                                                <ListItemText primary={item.label} />
                                            </SidebarItem>
                                        </SubMenuItemWrapper>
                                    ))}
                                </SubMenuWrapper>
                            </Collapse>
                        )}
                        <SidebarItem
                            open={open}
                            onClick={() => handleMenuToggle("product")}
                            onMouseEnter={(e) => handleHover(e, "product")}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Box component="img" src={Images.Producticon} width={24} marginRight={1} />
                            <ListItemText primary="Product" primaryTypographyProps={{ sx: { color: "#637381", fontSize: open ? "17px" : "13px" }, }} />

                            {open &&
                                (openMenu === "product" ? (
                                    <ExpandMoreIcon sx={{ color: "#637381" }} />) : (<ChevronRightIcon sx={{ color: "#637381" }} />
                                ))}
                        </SidebarItem>

                        {open && (
                            <Collapse in={openMenu === "product"}>
                                <SubMenuWrapper>
                                    <SubMenuLine />
                                    {productItems.map((item) => (
                                        <SubMenuItemWrapper key={item.path}>
                                            <SubMenuCurve />
                                            <SidebarItem open selected={location.pathname === item.path} 
                                            onClick={() => navigate(item.path)} 
                                            sx={{ py: 0.4, my: 0.4, minHeight: 36, borderRadius: 1, color: "#637381" }}>
                                                <ListItemText primary={item.label} />
                                            </SidebarItem>
                                        </SubMenuItemWrapper>
                                    ))}
                                </SubMenuWrapper>
                            </Collapse>
                        )}
                        <SidebarItem
                            open={open}
                            onClick={() => handleMenuToggle("order")}
                            onMouseEnter={(e) => handleHover(e, "order")}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Box component="img" src={Images.Projecticon} width={24} marginRight={1} />
                            <ListItemText primary="Order" primaryTypographyProps={{ sx: { color: "#637381", fontSize: open ? "17px" : "13px" }, }} />

                            {open &&
                                (openMenu === "order" ? (
                                    <ExpandMoreIcon sx={{ color: "#637381" }} />
                                ) : (
                                    <ChevronRightIcon sx={{ color: "#637381" }} />
                                ))}
                        </SidebarItem>

                        {open && (
                            <Collapse in={openMenu === "order"}>
                                <SubMenuWrapper>
                                    <SubMenuLine />
                                    {orderItems.map((item) => (
                                        <SubMenuItemWrapper key={item.path}>
                                            <SubMenuCurve />
                                            <SidebarItem open selected={location.pathname === item.path} 
                                            onClick={() => navigate(item.path)} 
                                            sx={{ py: 0.4, my: 0.4, minHeight: 36, borderRadius: 1, color: "#637381" }}>
                                                <ListItemText primary={item.label} />
                                            </SidebarItem>
                                        </SubMenuItemWrapper>
                                    ))}
                                </SubMenuWrapper>
                            </Collapse>
                        )}
                    </List>
                </SidebarContent>

                {!open && hoveredItem && !isMobile && (
                    <HoverPopup
                        sx={{ position: "fixed", top: popupPosition.top, left: popupPosition.left + 3, backgroundColor: "#1c252ee6", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", borderRadius: "8px", minWidth: "160px", zIndex: 999, }} onMouseEnter={() => setHoveredItem(hoveredItem)} onMouseLeave={() => setHoveredItem(null)}>
                        {(hoveredItem === "User" ? userItems : productItems).map((item) => (
                            <Box key={item.path} onClick={() => navigate(item.path)} sx={{ padding: "6px 10px", fontSize: 14, cursor: "pointer", borderRadius: 1, "&:hover": { backgroundColor: theme.palette.background.buttonHover, }, }}>
                                {item.label}
                            </Box>
                        ))}
                    </HoverPopup>
                )}
            </SidebarWrapper>
        </Drawer>
    );
};

export default Sidebar;
