import React from "react";
import { Box, TextField, Typography, Checkbox, FormControlLabel, Link, IconButton, InputAdornment, Stack, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ListButton } from "../../components/button/CustomButton";
import Images from "../../constants/Images";
import { useTheme } from "@mui/material/styles";
import { Logosvg } from "../../components/Svgs";
import Settings from "../../components/ui/settings";

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const theme = useTheme();
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: theme.palette.background.default, }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }} >
                <Typography variant="h6" sx={{ width: 40, color: "green.main" }}> <Logosvg /></Typography>
                <Settings />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 4, }}>

                <Stack direction="row" alignItems="center">
                    <Box sx={{ p: 6, display: "flex", flexDirection: "column", justifyContent: "center", }} >
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }} > Welcome to our Minimals</Typography>
                        <Typography sx={{ color: "#6B7280", mb: 4 }}>A whole new productive journey starts right here</Typography>
                        <Box component="img" src={Images.signinImage} alt="illustration" sx={{ width: "80%", maxWidth: 420, }} />
                    </Box>
                    <Box sx={{ p: 6 }}>
                        <TextField fullWidth placeholder="Enter your email address" sx={{
                            mb: 3,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                backgroundColor: theme.palette.background.signininputbg,
                                "& fieldset": { border: "none", },
                                "&:hover fieldset": { border: "none", },
                                "&.Mui-focused fieldset": { border: "none", },
                            },
                            "& input": { padding: "14px", },
                        }}
                        />
                        <TextField fullWidth placeholder="Enter your email address" type={showPassword ? "text" : "password"} sx={{
                            mb: 3,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                backgroundColor: theme.palette.background.signininputbg,
                                "& fieldset": { border: "none", },
                                "&:hover fieldset": { border: "none", },
                                "&.Mui-focused fieldset": { border: "none", },
                            },
                            "& input": { padding: "14px", },
                        }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <VisibilityOff sx={{ color: theme.palette.background.whiteBlack, }} /> : <Visibility sx={{ color: theme.palette.background.whiteBlack, }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, }} >
                            <FormControlLabel control={<Checkbox disableRipple sx={{
                                color: "#bbbbbb",
                                '&.Mui-checked': { color: "#141A21", },
                                '& .MuiSvgIcon-root': { fontSize: 20 }
                            }}
                            />}
                                label="Keep me logged in"
                                sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem', color: '#bbbbbb', fontWeight: 500, userSelect: 'none', }, }}
                            />
                            <Link href="#" underline="hover" color="#bbbbbb"> Forgot Password </Link>
                        </Box>

                        <ListButton contant="Sign in" width="100%" />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default LoginPage;