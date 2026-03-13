import { styled } from "@mui/material/styles";
import { Box, ListItemButton, IconButton } from "@mui/material";

export const SidebarWrapper = styled(Box, { shouldForwardProp: (prop) => prop !== 'open', })<{ open: boolean }>(({ theme, open }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: open ? 300 : 90,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  borderRight: `1px solid ${theme.palette.background.SidebarBorder}`,
  transition: "width 0.3s",
  zIndex: 1200,
}));

export const SidebarHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 20,
  paddingBottom: 8,
  paddingLeft: 26,
  paddingRight: 26,
  flexShrink: 0,
  position: "relative",
}));

export const ToggleButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 34,
  right: 0,
  transform: "translate(50%, -50%)",
  width: 25,
  height: 25,
  borderRadius: "50%",
  border: `1px solid ${theme.palette.background.SidebarBorder}`,
  backgroundColor: theme.palette.background.default,
  color: "#637381",
  zIndex: 1300,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.background.buttonHover,
  },
}));

export const SidebarContent = styled(Box)<{ open: boolean }>(({ open }) => ({
  flex: 1,
  overflowY: "auto",
  paddingLeft: open ? 16 : 0,
  paddingRight: open ? 16 : 0,
  scrollbarWidth: "thin",
  scrollbarColor: "green.main #f1f1f1",
}));

export const SidebarItem = styled(ListItemButton)<{ open: boolean }>(
  ({ open }) => ({
    flexDirection: open ? "row" : "column",
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 8,
    marginBottom: 4,
    "&:active": {
      backgroundColor: "rgba(0 167 111 / 16%)",
    },
    "&:focus": {
      backgroundColor: "rgba(0 167 111 / 16%)",
      color: "green.main",
      filter:
        "invert(46%) sepia(69%) saturate(413%) hue-rotate(115deg) brightness(90%) contrast(90%)",
    },
  })
);

export const SubMenuWrapper = styled(Box)(() => ({
  position: "relative",
  marginLeft: 40,
  marginTop: 4,
}));

export const SubMenuLine = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: -3,
  bottom: 25,
  width: "2px",
  backgroundColor: theme.palette.background.SidebarBorder,
}));

export const SubMenuItemWrapper = styled(Box)(() => ({
  position: "relative",
  paddingLeft: 16,
}));

export const SubMenuCurve = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 5,
  width: 16,
  height: 16,
  borderLeft: `2px solid ${theme.palette.background.SidebarBorder}`,
  borderBottom: `2px solid ${theme.palette.background.SidebarBorder}`,
  borderBottomLeftRadius: "8px",
}));

export const HoverPopup = styled(Box)(() => ({
  position: "absolute",
  left: "100%",
  top: "0",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  borderRadius: "8px",
  padding: "8px",
  minWidth: "160px",
}));