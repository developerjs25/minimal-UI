import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from '../profile';
import { Box, Chip, Menu, MenuItem, Stack, Typography } from "@mui/material";
import type { OptionType } from '../../../Types';
import { theme } from '../../../theme/theme';
import Notification from '../notification';
import { options } from '../Contant';



export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState<OptionType>(options[0]);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selected?: any) => {
    if (selected) setValue(selected);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, backdropFilter: "blur(4px)", backgroundColor: "blur.main", transition: "all 0.3s ease", position: "sticky", top: 0, zIndex: 1100, }}>
      <Toolbar>
        <Box sx={{ minWidth: 130 }}>
          <Box onClick={handleClick} sx={{  px: 1, py: 0.5, borderRadius: 2, cursor: "pointer", backgroundColor: "white.main", display: "flex", justifyContent: "center", alignItems: "center", "&:hover": { backgroundColor: "neutral.light" },}}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box component="img" src={value.image} sx={{ width: 25, height: 25 }} />
              <Typography sx={{ fontWeight: 550, fontSize: 15,}}> {value.label}</Typography>
              <Chip label={value.badge}  size="small" sx={{ borderRadius: 1.3, fontWeight: 700, backgroundColor: value.chipBackground, color: value.badge === "Free" ? "black.main" : "primary.main", fontSize: 12, height: 20, }} />
            </Stack>
            <Box sx={{ ml: 1 }}><UnfoldMoreIcon sx={{ color: "neutral.main", fontSize: 16 }} /></Box>
          </Box>
          <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()} PaperProps={{ sx: {  backgroundImage: ` url('src/assets/images/download (1).svg'),  url('src/assets/images/download.svg')`, backgroundPosition: "top right, bottom left", backgroundRepeat: "no-repeat, no-repeat", backgroundSize: "200px 200px, 200px 200px",  p: 0.5, py: 0.5, borderRadius: 3, boxShadow: "0 8px 24px black.main", width: 230, },}}>
            {options.map((item) => (
              <MenuItem key={item.label} onClick={() => handleClose(item)} sx={{ fontSize: 14, px: 0.5, py: 1.5, borderRadius: 2, "&:hover": { backgroundColor: "neutral.light" },"&:focus": { backgroundColor: "red.light" },}}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  <Stack direction="row" alignItems="center">
                    <Box component="img" src={item.image} sx={{ width: 25, height: 25, }} />
                    <Typography variant="caption"  sx={{ ml: 1.5, fontWeight: 500, fontSize: 15,}}> {item.label}</Typography>
                  </Stack>
                  <Chip label={item.badge} size="small" sx={{ borderRadius: 1.3, fontWeight: 700, ml: 1, backgroundColor: item.chipBackground, fontSize: 12 ,
                    color: item.badge === "Free" ? "black.main" : "primary.main",}}/>
                </Box>
              </MenuItem>
            ))}
            <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, my: 1 }} />
            <Stack direction="row"  alignItems="center" spacing={1.9} sx={{ mt: 1, mb: 0.5, px: 1, py: 0.5, borderRadius: 2,cursor: "pointer","&:hover": { backgroundColor: "neutral.light" },}}>
              <AddIcon sx={{ fontSize: 20, }} />
              <Typography variant="caption" sx={{ fontWeight: 500, fontSize: 15,}}> Create workspace</Typography>
            </Stack>
          </Menu>
        </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit" sx={{ '&:hover': { backgroundColor: 'transparent', }, }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: 'neutral.light', px: 1.5, py: 0.75, borderRadius: 2, cursor: 'pointer', '&:hover': { backgroundColor: 'neutral.dark', }, }}>
                <SearchIcon sx={{ color: 'neutral.main', fontSize: 20 }} />
                <Box component="span" sx={{ fontSize: 12, fontWeight: 600, px: 1, py: 0.25, borderRadius: 1, backgroundColor: 'white.main', }}> ⌘K</Box>
              </Box>
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ '&:hover': { backgroundColor: 'transparent', }, }}>
              <Badge badgeContent={4} sx={{ '& .MuiBadge-badge': { backgroundColor: 'orange.main', color: 'white.main', }, }} >
                <Notification/>
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ '&:hover': { backgroundColor: 'transparent', }, }}>
              <SettingsIcon sx={{ color: "neutral.main", animation: 'rotateBorder 8s linear infinite', '@keyframes rotateBorder': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' }, }, }} />
            </IconButton>
            <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit" sx={{ '&:hover': { backgroundColor: 'transparent', }, }}>
              <Profile />
            </IconButton>
          </Box>

      </Toolbar>
    </Box>
  );
}
