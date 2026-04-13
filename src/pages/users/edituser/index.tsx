import { Box, Stack, Grid, } from "@mui/material";
import ImageBox from "../components/ImageBox";
import { CountryInput, PhoneNumberInput, UserInputField } from "../../../components/input/CustomInput";
import { ListButton } from "../../../components/button/CustomButton";
import Breadcrumb from "../../../components/breadcrumbs";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoleSelecter from "../../../components/select";
import Toaster from "../../../components/toaster";


const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [openToast, setOpenToast] = useState(false);
    const [userData, setUserData] = useState<any>({
        image: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        countrycode: "",
        state: "",
        city: "",
        address1: "",
        address2: "",
        zip: "",
        status: "",
    });

    useEffect(() => {
        const fetchUser = async () => {
            if (!id) return;

            try {
                const res = await axios.get(`http://localhost:3003/data/${id}`);
                setUserData(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (field: string, value: string) => {
        setUserData((prev: any) => ({
            ...prev,
            [field]: value,

        }));
    };
    const handleSubmit = async () => {
        try {
            await axios.put(`http://localhost:3003/data/${id}`, userData);

            setOpenToast(true);


            setTimeout(() => {
                navigate("/app/user/list");
            }, 1500);
        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    return (
        <Box sx={{ maxWidth: 1500, mx: "auto", pb: 9, pt: 5 }}>
            <Box px={2} pb={3}>
                <Breadcrumb link1="/" linkName1="Users" link2="/app/user/list" linkName2="List" link3="/app/user/edit" linkName3={userData.firstName} />
            </Box>
            <Stack direction={{ xs: "column", md: "row" }} spacing={10} mt={3} >
                <ImageBox
                    image={userData.image}
                    onChange={(img: string) => handleChange("image", img)}
                />
                <Box sx={{ width: { xs: "100%", md: 1010 }, height: "auto", boxShadow: "0 3px 10px rgba(133, 131, 131, 0.12)",
                 borderRadius: 2, alignItems: "center", p: 3, gap: 3, }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="First name" value={userData.firstName} onChange={(e: any) => handleChange("firstName", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Last name" value={userData.lastName} onChange={(e: any) => handleChange("lastName", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Email" value={userData.email} onChange={(e: any) => handleChange("email", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            {/* <PhoneNumberInput PlaceHolder="Phone number" value={userData.phone || ""} onChange={(e) => handleChange("phone", e.target.value)} country={userData.countrycode} /> */}
                          <PhoneNumberInput
  value={userData.phone}
  country={userData.countrycode}
  onChange={(data) => {
    setUserData((prev: any) => ({
      ...prev,
      phone: data.phone,
      countrycode: data.countrycode,
    }));
  }}
/>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <UserInputField PlaceHolder="City" value={userData.city} onChange={(e: any) => handleChange("city", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <UserInputField PlaceHolder="State/region" value={userData.state} onChange={(e: any) => handleChange("state", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <CountryInput PlaceHolder="Country" value={userData.country} onChange={(e: any) => handleChange("country", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Address1" value={userData.address1} onChange={(e: any) => handleChange("address1", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Address2" value={userData.address2} onChange={(e: any) => handleChange("address2", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Zip/Postal code" value={userData.zip} onChange={(e: any) => handleChange("zip", e.target.value)} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <RoleSelecter value={userData.status} onChange={(value: string) => handleChange("status", value)} />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
                        <ListButton contant="Update user" click={handleSubmit} />
                    </Box>
                </Box>
            </Stack>
            <Toaster openToast={openToast} setOpenToast={setOpenToast} contant="User updated successfully!" />
        </Box>
    )
}

export default EditUser;
