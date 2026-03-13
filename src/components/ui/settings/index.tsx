import * as React from "react";
import { Box, Drawer, IconButton, Stack, Typography, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { COLORS } from "../../../constants/colors";
import { useColorSettings } from "../../../theme/ThemeContext";
import { useTheme } from "@mui/material/styles";
import { ColorImage } from "../Contant";


export default function Settings() {
    const [open, setOpen] = React.useState(false);
    const { setMainColor, toggleMode, mode } = useColorSettings();
    const theme = useTheme();

    const toggleDrawer = (value: boolean) => () => {
        setOpen(value);
    };


    return (
        <>
            <Box onClick={toggleDrawer(true)} sx={{ cursor: "pointer" }}>
                <SettingsIcon sx={{
                    color: "neutral.main", animation: "rotateIcon 6s linear infinite",
                    "@keyframes rotateIcon": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" }, },
                }} />
            </Box>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} PaperProps={{ sx: { width: 320, backdropFilter: "blur(4px)", transition: "all 0.3s ease", }, }}
                ModalProps={{ BackdropProps: { sx: { backgroundColor: 'transparent' }, }, }} >
                <Box sx={{ height: "100%", display: "flex", flexDirection: "column", px: 2 , backgroundColor: theme.palette.background.blurBackground}}>
                    <Box sx={{ py: 2, display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h6" fontWeight={600}>Settings</Typography>
                        <IconButton onClick={toggleDrawer(false)}><CloseIcon /></IconButton>
                    </Box>
                    <Box sx={{ border: "1px solid #919eab1f", borderRadius: 4, p: 2, mb: 3 }}>
                        <Stack direction="row" spacing={2} mb={3} justifyContent="space-between">
                            <Typography fontWeight={600}>Mode</Typography>
                            <Box>
                                {mode === "dark" ? <DarkModeIcon sx={{ color: "green.main" }} /> : <LightModeIcon sx={{ color: "green.main" }} />}
                            </Box>
                        </Stack>
                        <Stack direction="row" spacing={2} justifyContent="space-between">
                            <Button variant="contained" fullWidth sx={{
                                height: 35, mt: 2, textTransform: "none", borderRadius: 2, fontWeight: 600,
                                bgcolor: mode === "dark" ? theme.palette.background.buttonHover : "green.main", color: mode === "dark" ? "green.main" : theme.palette.background.buttonHover
                            }} onClick={() => toggleMode("light")}>Light</Button>
                            <Button variant="contained" fullWidth sx={{
                                height: 35, mt: 2, textTransform: "none", borderRadius: 2, fontWeight: 600,
                                bgcolor: mode === "dark" ? "green.main" : theme.palette.background.buttonHover, color: mode === "dark" ? theme.palette.background.buttonHover : "green.main"
                            }} onClick={() => toggleMode("dark")}>Dark</Button>
                        </Stack>
                    </Box>
                    <Box sx={{ border: "1px solid #919eab1f", borderRadius: 4, p: 2 }}>
                        <Typography fontWeight={600} mb={2}>Color</Typography>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 13, sm: 6, md: 4 }}>
                                <Button variant="outlined" onClick={() => setMainColor(COLORS.green)} sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none", color: "#00a76f",
                                    "&:focus": { backgroundColor: "#00a76f14" },
                                }}>
                                    <ColorImage />
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 13, sm: 6, md: 4 }}>
                                <Button variant="outlined" onClick={() => setMainColor(COLORS.lightBlue)} sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none", color: "#078dee",
                                    "&:focus": { backgroundColor: "#078dee14" },
                                }}>
                                    <ColorImage />
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 13, sm: 6, md: 4 }}>
                                <Button variant="outlined" onClick={() => setMainColor(COLORS.purple)} sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none", color: "#7635dc",
                                    "&:focus": { backgroundColor: "#7635dc14" },
                                }}>
                                    <ColorImage />
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 13, sm: 6, md: 4 }}>
                                <Button variant="outlined" onClick={() => setMainColor(COLORS.darkBlue)} sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none", color: "#0c68e9",
                                    "&:focus": { backgroundColor: "#0c68e914" },
                                }}>
                                    <ColorImage />
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 13, sm: 6, md: 4 }}>
                                <Button variant="outlined" onClick={() => setMainColor(COLORS.yellow)} sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none", color: "yellow.main",
                                    "&:focus": { backgroundColor: "#fda92d14" },
                                }}>
                                    <ColorImage />
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 13, sm: 6, md: 4 }}>
                                <Button variant="outlined" onClick={() => setMainColor(COLORS.red)} sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none", color: "#ff3030",
                                    "&:focus": { backgroundColor: "#ff303014" },
                                }}>
                                    <ColorImage />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}
{/* <Box sx={{ border: "1px solid #919eab1f", borderRadius: 4, p: 2 }}>
                        <Typography fontWeight={600} mb={2}>Font Family</Typography>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 13, sm: 6, md: 6 }}>
                                <Button variant="outlined" sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none",color: "#919EAB" ,
                                    "&:focus": { backgroundColor: "#fff", boxShadow: "0px 3px 18px 1px rgba(77, 77, 77, 0.2)",color: "black.main"  },
                                }}>
                                    <Box component="img" src={Images.fontfamily} alt="font"/>
                                    <Typography fontWeight={600} fontSize={12} sx={{ textTransform: 'none',}} > Public Sans</Typography>
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 13, sm: 6, md: 6 }}>
                                <Button variant="outlined" sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none",color: "#919EAB" ,
                                    "&:focus": { backgroundColor: "#fff", boxShadow: "0px 3px 18px 1px rgba(77, 77, 77, 0.2)" ,color: "black.main"},
                                }}>
                                    <Box component="img" src={Images.fontfamily} alt="font"/>
                                    <Typography fontWeight={600} fontSize={12} sx={{ textTransform: 'none' }} >Inter</Typography>
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 13, sm: 6, md: 6 }}>
                                <Button variant="outlined" sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none",color: "#919EAB" ,
                                    "&:focus": { backgroundColor: "#fff", boxShadow: "0px 3px 18px 1px rgba(77, 77, 77, 0.2)" ,color: "black.main"},
                                }}>
                                     <Box component="img" src={Images.fontfamily} alt="font"/>
                                    <Typography fontWeight={600} fontSize={12} sx={{ textTransform: 'none'}} >DM Sans</Typography>
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 13, sm: 6, md: 6 }}>
                                <Button variant="outlined" sx={{
                                    flexDirection: "column", gap: 1, borderRadius: 3, width: "100%", py: 3, border: "none",color: "#919EAB" ,
                                    "&:focus": { backgroundColor: "#fff", boxShadow: "0px 3px 18px 1px rgba(77, 77, 77, 0.2)" ,color: "black.main"},
                                }}>
                                     <Box component="img" src={Images.fontfamily} alt="font"/>
                                    <Typography fontWeight={600} fontSize={12} sx={{ textTransform: 'none' }} >Nunito Sans</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box> */}