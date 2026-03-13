import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
import Profile from "../profile";
import { Box } from "@mui/material";
import Notification from "../notification";
import HeaderSelecter from "../../select";
import Images from "../../../constants/Images";
import Settings from "../settings";
import { useTheme } from "@mui/material/styles";

export default function Header({ toggleSidebar, showMenu }: any) {
    const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, backdropFilter: "blur(4px)", backgroundColor:theme.palette.background.blurBackground, transition: "all 0.3s ease", position: "sticky", top: 0, zIndex: 1100, }} >
      <Toolbar sx={{ px: { xs: 1, md: 2 } }}>    
        {showMenu && (
          <IconButton color="inherit" edge="start" onClick={toggleSidebar}>
            <Box component="img"src={Images.responsiveheadericon} sx={{ width: 26 }} />
          </IconButton>
        )}
        <HeaderSelecter />
        <Box sx={{ flexGrow: 1 }} />
        {/* <IconButton sx={{ display: { xs: "none", md: "flex" }, "&:hover": { backgroundColor: "transparent" }, }} >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, backgroundColor: "neutral.light", px: 1.5, py: 0.75, borderRadius: 2, }}>
            <SearchIcon sx={{ color: "neutral.main", fontSize: 20 }} />
            <Box component="span" sx={{ fontSize: 12, fontWeight: 600, px: 1, py: 0.25, borderRadius: 1, backgroundColor: "white.main", }} > ⌘K </Box>
          </Box>
        </IconButton> */}
        <IconButton size="large" color="inherit" sx={{ "&:hover": { backgroundColor: "transparent" } }}>
            <Notification />
        </IconButton>
        <IconButton size="large" color="inherit" sx={{ display: { xs: "none", lg: "flex" }, "&:hover": { backgroundColor: "transparent" }, }} >
          <Settings/>
        </IconButton>

        <IconButton size="large" edge="end" color="inherit" sx={{ "&:hover": { backgroundColor: "transparent" } }} >
          <Profile />
        </IconButton>
      </Toolbar>
    </Box>
  );
}