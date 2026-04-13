import React, { useState, type ChangeEvent } from "react";
import { Box, Typography, Grid, TextField, Button, Stack, Avatar, InputAdornment, IconButton, Divider, useTheme, alpha, } from "@mui/material";
import { Visibility, VisibilityOff, Person, Email, Phone, Public, LocationOn, Map, Home, Edit, } from "@mui/icons-material";
import Images from "../../constants/Images";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import StyledChip from "../../components/chip";
import { getUserStatusStyle } from "../../components/contact/OrderContant";
import type { FormErrors, UserData } from "../../Types";
import Toaster from "../../components/toaster";

const MyAccount: React.FC = () => {
    const theme = useTheme();

    const [formData, setFormData] = useState<UserData>({
        name: "Jaydon Frankie",
        email: "demo@minimals.cc",
        image: Images.Profile,
        number: "+54 11 1234-5678",
        country: "Sweden",
        state: "Virginia",
        city: "Rancho Cordova",
        address: "908 Jack Locks",
        zip: "85807",
        company: "Feest Group",
        role: "IT Administrator",
        status: "Pending",
        password: "Minimal@123",
        confirmPassword: "Minimal@123",
    });

    const [errors] = useState<FormErrors>({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
     const [openToast, setOpenToast] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
         if (isEditing ) {
            setOpenToast(true);

            setTimeout(() => {
                setIsEditing(false);
            }, 1500);
        }
       
    };

    const getFieldIcon = (name: string) => {
        const icons = {
            name: Person,
            email: Email,
            number: Phone,
            country: Public,
            state: LocationOn,
            city: Map,
            address: Home,
            zip: LocationOn,
        };
        const IconComponent = icons[name as keyof typeof icons];
        return IconComponent ? <IconComponent sx={{ color: 'action.active', mr: 1 }} /> : null;
    };

    const InputData = [
        { name: 'name', label: 'Full Name', md: 6 },
        { name: 'email', label: 'Email Address', md: 6 },
        { name: 'number', label: 'Phone Number', md: 6 },
        { name: 'country', label: 'Country', md: 6 },
        { name: 'state', label: 'State', md: 6 },
        { name: 'city', label: 'City', md: 6 },
        { name: 'address', label: 'Address', md: 12 },
        { name: 'zip', label: 'ZIP Code', md: 6 },
        { name: 'company', label: 'Company', md: 6 },
    ]
    return (
        <Box sx={{ maxWidth: 1500, mx: "auto", minHeight: '100vh', pb: 6, bgcolor: theme.palette.background.default, }}>
            <Typography variant="h4" fontWeight={700} mb={4} textAlign="center" color="text.primary"> My Account</Typography>
            {/* Header Section */}
            <Box sx={{ p: 6, borderRadius: 5, backgroundColor: theme.palette.background.Sidebarmenu, border: `1px solid ${theme.palette.background.SidebarBorder}`, }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
                    <Avatar src={formData.image} alt={formData.name} sx={{
                        width: 140, height: 140, border: `4px solid ${theme.palette.primary.main}`
                        , boxShadow: `0 16px 40px ${alpha(theme.palette.primary.main, 0.3)}`,
                        '&::after': {
                            content: '""', position: 'absolute', top: -4, left: -4, right: -4, bottom: -4, borderRadius: '50%',
                            backgroundColor: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, zIndex: -1, opacity: 0.3
                        }
                    }}
                    />
                    <Box flex={1}>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <Typography variant="h4" fontWeight={800} sx={{ color: 'text.primary' }}>{formData.name}</Typography>
                        </Stack>
                        <Typography variant="h6" fontSize={17} color="text.secondary" mb={1}>{formData.email}</Typography>
                        <StyledChip label={formData.status} bgcolor={getUserStatusStyle(formData.status).backgroundColor}
                            color={getUserStatusStyle(formData.status).color} />
                    </Box>
                    <Button startIcon={<Edit />} onClick={() => setIsEditing(!isEditing)}
                        sx={{
                            px: 3, py: 1.5, fontSize: '16px', color: theme.palette.background.listColor, fontWeight: 600, textTransform: 'none', borderRadius: 4,
                            boxShadow: "none", background: theme.palette.background.whiteBlack,
                            '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 12px 40px ${alpha(theme.palette.primary.dark, 0.6)}`, },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}>
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </Button>
                </Stack>
            </Box>

            <Divider sx={{ my: 4, opacity: 0.5 }} />

            {/* Form Section */}
            <Box component="form" onSubmit={handleSubmit}
                sx={{
                    p: { xs: 4, md: 6 }, borderRadius: 4, backgroundColor: theme.palette.background.Sidebarmenu, border: `1px solid ${theme.palette.background.SidebarBorder}`,
                }}
            >
                <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" color="text.primary">Profile Information</Typography>
                <Grid container spacing={4}>
                    {InputData.map(({ name, label, md }) => (
                        <Grid size={{ xs: 12, md }} key={name}>
                            <TextField fullWidth label={label} name={name === 'number' ? 'number' : name === 'zip' ? 'zip' : name}
                                value={formData[name as keyof UserData] as string} onChange={handleChange} disabled={!isEditing}
                                InputProps={{
                                    startAdornment: getFieldIcon(name),
                                    sx: {
                                        borderRadius: 3,
                                        '&:hover': { backgroundColor: theme.palette.background.buttonHover, },
                                        '&.Mui-focused': { backgroundColor: theme.palette.background.buttonHover, },
                                        '&.Mui-focused fieldset': { border: `1px solid ${theme.palette.background.whiteBlack}` },

                                    }
                                }}
                                InputLabelProps={{ sx: { color: 'text.secondary', '&.Mui-focused': { color: 'text.secondary', }, } }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: `1px solid ${theme.palette.background.Inputborder}`, borderRadius: 3, },
                                        '&:hover fieldset': { border: `1px solid ${theme.palette.background.whiteBlack}`, },
                                        '&.Mui-focused fieldset': { border: `1px solid ${theme.palette.background.whiteBlack}` },
                                    },
                                }}
                            />
                        </Grid>
                    ))}

                    {/* Password Fields */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField fullWidth label="New Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange}
                            error={!!errors.password} helperText={errors.password} disabled={!isEditing}
                            InputProps={{
                                startAdornment: <LockPersonIcon sx={{ color: 'action.active', mr: 1 }} />,
                                sx: {
                                    borderRadius: 3,
                                    '&:hover': { backgroundColor: theme.palette.background.buttonHover, },
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="small">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ sx: { color: 'text.secondary', '&.Mui-focused': { color: 'text.secondary', }, } }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: `1px solid ${theme.palette.background.Inputborder}`, borderRadius: 3, },
                                    '&:hover fieldset': { borderColor: theme.palette.background.whiteBlack, },
                                    '&.Mui-focused fieldset': { border: `1px solid ${theme.palette.background.whiteBlack}` },
                                },
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField fullWidth label="Confirm Password" name="confirmPassword" type={showConfirm ? "text" : "password"} value={formData.confirmPassword}
                            onChange={handleChange} error={!!errors.confirmPassword} helperText={errors.confirmPassword} disabled={!isEditing}
                            InputProps={{
                                startAdornment: <LockPersonIcon sx={{ color: 'action.active', mr: 1 }} />,
                                sx: {
                                    borderRadius: 3,
                                    '&:hover': { backgroundColor: theme.palette.background.buttonHover, },
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowConfirm(!showConfirm)} edge="end" size="small">
                                            {showConfirm ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{ sx: { color: 'text.secondary', '&.Mui-focused': { color: 'text.secondary', }, } }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { border: `1px solid ${theme.palette.background.Inputborder}`, borderRadius: 3, },
                                    '&:hover fieldset': { borderColor: theme.palette.background.whiteBlack, color: theme.palette.background.whiteBlack, },
                                    '&.Mui-focused fieldset': { border: `1px solid ${theme.palette.background.whiteBlack}`, color: theme.palette.background.whiteBlack },
                                },
                            }}
                        />
                    </Grid>
                </Grid>

                {isEditing && (
                    <Box sx={{ mt: 6, textAlign: 'center' }}>
                        <Button type="submit" sx={{
                            px: 4, py: 1.5, fontSize: '17px', fontWeight: 600, textTransform: 'none', borderRadius: 5, minWidth: 200, color: theme.palette.background.listColor,
                            boxShadow: `0 8px 32px ${alpha(theme.palette.primary.dark, 0.4)}`, backgroundColor: theme.palette.background.whiteBlack,
                            '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 16px 48px ${alpha(theme.palette.primary.dark, 0.6)}`, },
                        }}>
                            Save Changes
                        </Button>
                    </Box>
                )}
                <Toaster openToast={openToast} setOpenToast={setOpenToast} contant="User updated successfully!" />
            </Box>
        </Box>
    );
};

export default MyAccount;