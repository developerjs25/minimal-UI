import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Box, Chip, Menu, MenuItem, Stack, Typography } from "@mui/material";
import type { OptionType } from '../../Types';
import { options } from '../ui/Contant';
import { useTheme } from "@mui/material/styles";

const HeaderSelecter = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [value, setValue] = React.useState<OptionType>(options[0]);
    const open = Boolean(anchorEl);
    const theme = useTheme();


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (selected?: any) => {
        if (selected) setValue(selected);
        setAnchorEl(null);
    };


    return (
        <Box sx={{ minWidth: { xs: 0, md: 130 }  }}>
            <Box onClick={handleClick} sx={{ px: 1, py: 0.5, borderRadius: 2, cursor: "pointer", backgroundColor: theme.palette.background.default, display: "flex", justifyContent: "center", alignItems: "center", }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Box component="img" src={value.image} sx={{ width: 25, height: 25 }} />
                    <Typography sx={{ fontWeight: 550, fontSize: 15,    display: { xs: "none", sm: "block" }}}> {value.label}</Typography>
                    <Chip label={value.badge} size="small" sx={{  display: { xs: "none", sm: "flex" }, borderRadius: 1.3, fontWeight: 700, backgroundColor: value.chipBackground, color: value.badge === "Free" ? "black.main" : "primary.main", fontSize: 12, height: 20, }} />
                </Stack>
                <Box sx={{ ml: 1 }}><UnfoldMoreIcon sx={{ color: "neutral.main", fontSize: 16 }} /></Box>
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()} PaperProps={{ sx: { backgroundImage: ` url('../assets/images/download (1).svg'),  url('../assets/images/download.svg')`, backgroundPosition: "top right, bottom left", backgroundRepeat: "no-repeat, no-repeat", backgroundSize: "200px 200px, 200px 200px", p: 0.5, py: 0.5, borderRadius: 3, boxShadow: "0 8px 24px black.main", width: 230, }, }}>
                {options.map((item) => (
                    <MenuItem key={item.label} onClick={() => handleClose(item)} sx={{ fontSize: 14, px: 0.5, py: 1.5, borderRadius: 2,
                     "&:hover": { opacity:2 }, "&:focus": { opacity:4  }, }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                            <Stack direction="row" alignItems="center">
                                <Box component="img" src={item.image} sx={{ width: 25, height: 25, }} />
                                <Typography variant="caption" sx={{ ml: 1.5, fontWeight: 500, fontSize: 15, }}> {item.label}</Typography>
                            </Stack>
                            <Chip label={item.badge} size="small" sx={{
                                borderRadius: 1.3, fontWeight: 700, ml: 1, backgroundColor: item.chipBackground, fontSize: 12,
                                color: item.badge === "Free" ? "black.main" : "primary.main",
                            }} />
                        </Box>
                    </MenuItem>
                ))}
                <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, my: 1 }} />
                <Stack direction="row" alignItems="center" spacing={1.9} sx={{ mt: 1, mb: 0.5, px: 1, py: 0.5, borderRadius: 2, cursor: "pointer", "&:hover": { backgroundColor: "neutral.light" }, }}>
                    <AddIcon sx={{ fontSize: 20, }} />
                    <Typography variant="caption" sx={{ fontWeight: 500, fontSize: 15, }}> Create workspace</Typography>
                </Stack>
            </Menu>
        </Box>
    )
}

export default HeaderSelecter
