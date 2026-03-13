import { Box, Stack, Typography, Grid } from "@mui/material";
import ImageBox from "../components/ImageBox";
import { UserInputField } from "../../../components/input/CustomInput";
import { ListButton } from "../../../components/button/CustomButton";
import Breadcrumb from "../../../components/breadcrumbs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const CreateUser = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: "",
        fullName: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        address: "",
        zip: "",
        company: "",
        role: "",
    });
    const [openToast, setOpenToast] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
        if (value.trim() !== "") {
            setErrors({ ...errors, [field]: false });
        }
    };

    const handleSubmit = () => {
        const newErrors: { [key: string]: boolean } = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) newErrors[key] = true;
        });

        setErrors(newErrors);
         console.log(formData);
         
        if (Object.keys(newErrors).length === 0) {
            setOpenToast(true);

            setTimeout(() => {
                navigate("/user/list");
            }, 1500);
        }
    };
    return (
        <Box sx={{ px: 14, pt: 0 }}>
            <Typography variant="h5" fontWeight={600} mb={3} p={0}>Create user</Typography>
            <Breadcrumb link1="/" linkName1="Dashboard" link2="/user/profile" linkName2="User" link3="/user/list" linkName3="Create user" />
            <Stack direction={{ xs: "column", md: "row" }} spacing={3} mt={3}>
                <ImageBox error={errors.image} image={formData.image}  onChange={(img) => handleChange("image", img)}/>
                <Box sx={{ width: { xs: "100%", md: 950 }, height: "auto", boxShadow: "0 3px 10px rgba(133, 131, 131, 0.12)", borderRadius: 2, alignItems: "center", p: 3, gap: 3, }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Full name" value={formData.fullName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("fullName", e.target.value)}
                                error={errors.fullName}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Email address" value={formData.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                                error={errors.email}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Phone number" value={formData.phone}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("phone", e.target.value)}
                                error={errors.phone}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Country" value={formData.country}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("country", e.target.value)}
                                error={errors.country}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="State/region" value={formData.state}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("state", e.target.value)}
                                error={errors.state}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="City" value={formData.city}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("city", e.target.value)}
                                error={errors.city}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Address" value={formData.address}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("address", e.target.value)}
                                error={errors.address}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Zip/code" value={formData.zip}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("zip", e.target.value)}
                                error={errors.zip}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Company" value={formData.company}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("company", e.target.value)}
                                error={errors.company}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Role" value={formData.role}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("role", e.target.value)}
                                error={errors.role}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <ListButton contant="Create user" click={handleSubmit} />
                    </Box>
                </Box>
            </Stack>
            <Snackbar open={openToast} autoHideDuration={2000} onClose={() => setOpenToast(false)}anchorOrigin={{ vertical: "top", horizontal: "right" }} >
                <Alert severity="success" variant="filled" onClose={() => setOpenToast(false)} >
                    User created successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default CreateUser;