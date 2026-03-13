import { Box, Stack, Typography } from "@mui/material";
import { FONTS } from "../../../constants/fonts";
import Breadcrumb from "../../../components/breadcrumbs";
import Images from "../../../constants/Images";
import { invoices } from "../../../components/contact/UserContant";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

const Profile = () => {
    const { id } = useParams();
       const theme = useTheme();
    const [userData, setUserData] = useState<any>({
        name: "",
        email: "",
        number: "",
        company: "",
        role: "",
        status: "",
    });

    useEffect(() => {
        if (id) {
            const user = invoices.find((item: { id: number; }) => item.id === Number(id));

            if (user) {
                setUserData(user);
            }
        }
    }, [id]);



    return (
        <Box sx={{ px: 9, pt: 0 }}>
            <Box>
                <Typography variant="h5" fontWeight={700} mb={3} p={0} sx={{ fontFamily: FONTS.primary, }}>View User</Typography>
                <Breadcrumb link1="/" linkName1="Dashboard" link2="/user/profile" linkName2="User" link3="/user/userlist" linkName3={userData.name} />
            </Box>
            <Box sx={{ position: "relative", backgroundImage: `linear-gradient( #004b50cc, #004b50cc), url(${Images.profilebg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", minHeight: 300, color: "white.main", mt: 3, borderRadius: 4, boxShadow: `0 0 2px 0 rgba(145 158 171 / 20%), 0 12px 24px -4px rgba(145 158 171 / 12%)` }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ position: "absolute", left: 25, bottom: 35, zIndex: 999 }}>
                    <Box component="img" src={Images.Profile} alt="user" sx={{ borderRadius: "50%", width: 123 }} />
                    <Box >
                        <Typography variant="h5" fontWeight={700}>{userData.name}</Typography>
                        <Typography variant="h6" color="neutral.main" fontWeight={550} fontSize={15}>{userData.role}</Typography>
                    </Box>
                </Stack>
                <Box sx={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: theme.palette.background.ViewPaperColor, height: 50 }}>
                </Box>
            </Box>
            <Box my={3}>
                <Box sx={{ boxShadow: "0 0 2px 0 rgba(145,158,171,0.2), 0 12px 24px -4px rgba(145,158,171,0.12)",width: "100%", borderRadius: 4, overflow: "hidden",}}>
                    <Box sx={{fontWeight: 600,fontSize: { xs: 16, sm: 17 },px: 2,py: 1.5,backgroundColor: theme.palette.background.ViewPaperColor,}}>Personal Details</Box>
                    <Box sx={{}}>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between", alignContent: "center", mb: 1.5, borderBottom: `1px dashed ${theme.palette.background.SidebarBorder}`, py: 1.5, px: { xs: 2, sm: 3 },}}>
                            <Typography variant="subtitle2" fontWeight={550}>Full name</Typography>
                            <Typography variant="body2">{userData.name}</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between", alignContent: "center", mb: 1.5, borderBottom:  `1px dashed ${theme.palette.background.SidebarBorder}`, py: 1.5, px: { xs: 2, sm: 3 },}}>
                            <Typography variant="subtitle2" fontWeight={550}>Email Address</Typography>
                            <Typography variant="body2">{userData.email}</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between", alignContent: "center", mb: 1.5, borderBottom:  `1px dashed ${theme.palette.background.SidebarBorder}`, py: 1.5, px: { xs: 2, sm: 3 },}}>
                            <Typography variant="subtitle2" fontWeight={550}>Phone Number</Typography>
                            <Typography variant="body2">{userData.number}</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between", alignContent: "center", mb: 1.5, borderBottom:  `1px dashed ${theme.palette.background.SidebarBorder}`, py: 1.5, px: { xs: 2, sm: 3 },}}>
                            <Typography variant="subtitle2" fontWeight={550}>Country</Typography>
                            <Typography variant="body2">{userData.country}</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between", alignContent: "center", mb: 1.5, borderBottom:  `1px dashed ${theme.palette.background.SidebarBorder}`, py: 1.5, px: { xs: 2, sm: 3 },}}>
                            <Typography variant="subtitle2" fontWeight={550}>State</Typography>
                            <Typography variant="body2">{userData.state}</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between", alignContent: "center", mb: 1.5, borderBottom:  `1px dashed ${theme.palette.background.SidebarBorder}`, py: 1.5, px: { xs: 2, sm: 3 },}}>
                            <Typography variant="subtitle2" fontWeight={550}>City</Typography>
                            <Typography variant="body2">{userData.city}</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between", alignContent: "center", mb: 1.5, borderBottom:  `1px dashed ${theme.palette.background.SidebarBorder}`, py: 1.5, px: { xs: 2, sm: 3 },}}>
                            <Typography variant="subtitle2" fontWeight={550}>Address</Typography>
                            <Typography variant="body2">{userData.address}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile