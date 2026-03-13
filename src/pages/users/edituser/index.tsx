import { Box, Stack, Typography, Grid, } from "@mui/material";
import ImageBox from "../components/ImageBox";
import { UserInputField } from "../../../components/input/CustomInput";
import { ListButton } from "../../../components/button/CustomButton";
import Breadcrumb from "../../../components/breadcrumbs";
import { invoices } from "../../../components/contact/UserContant";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const EditUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState<any>({name: "",email: "",number: "",company: "",role: "",status: "",});

    useEffect(() => {
        if (id) {
            const user = invoices.find((item: { id: number; }) => item.id === Number(id));

            if (user) {
                setUserData(user);
            }
        }
    }, [id]);

    return (
        <Box sx={{ px: 14, pt: 0 }}>
            <Typography variant="h5" fontWeight={700} mb={3} p={0}>Edit</Typography>
            <Breadcrumb link1="/" linkName1="Dashboard" link2="/user/profile" linkName2="User" link3="/user/list" linkName3={userData.name} />
            <Stack direction={{ xs: "column", md: "row" }} spacing={3} mt={3} >
                <ImageBox image={userData.image} status={userData.status}/>
                <Box sx={{ width: { xs: "100%", md: 950 }, height: "auto", boxShadow: "0 3px 10px rgba(133, 131, 131, 0.12)", borderRadius: 2, alignItems: "center", p: 3, gap: 3, }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="Full name" value={userData.name} /></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="Email address" value={userData.email} /></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="Phone number" value={userData.number} /></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="Country" value={userData.country} /></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="State/region"  value={userData.state}/></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="City" value={userData.city} /></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="Address" value={userData.address} /></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="Zip/code"  value={userData.zip}/></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="Company"  value={userData.company}/></Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}><UserInputField PlaceHolder="Role" value={userData.role} /></Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
                        <ListButton contant="Update user" />
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default EditUser
