import { Box, Stack, Grid } from "@mui/material";
import ImageBox from "../components/ImageBox";
import { CountryInput, PhoneNumberInput, StateInput, UserInputField } from "../../../components/input/CustomInput";
import { ListButton } from "../../../components/button/CustomButton";
import Breadcrumb from "../../../components/breadcrumbs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Toaster from "../../../components/toaster";
import StatusSelecter from "../../../components/select";

const CreateUser = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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

    const [openToast, setOpenToast] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

    // const handleChange = (field: string, value: string) => {
    //     setFormData({ ...formData, [field]: value });
    //     if (value.trim() !== "") {
    //         setErrors({ ...errors, [field]: false });
    //     }
    // };
    const handleChange = (field: string, value: any) => {
        setFormData((prev: any) => {
            const updated = {
                ...prev,
                [field]: value,
            };

            // ✅ RESET STATE when country changes
            if (field === "countrycode") {
                updated.state = "";
            }

            return updated;
        });
    };

    const handleSubmit = async () => {
        const newErrors: { [key: string]: boolean } = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key as keyof typeof formData]?.trim()) {
                newErrors[key] = true;
            }
        });

        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailRegex.test(formData.email)) {
            alert("Invalid email format");
            return;
        }

        if (Object.keys(newErrors).length > 1) {
            setErrors(newErrors);
            return;
        }

        try {
            const resp = await axios.post("http://localhost:3003/data", formData, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(resp.data);

            setOpenToast(true);
            setTimeout(() => {
                navigate("/app/user/list");
            }, 1500);
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };

    return (
        <Box sx={{ maxWidth: 1500, mx: "auto", pb: 9, pt: 5 }}>
            <Box px={2} pb={3}>
                <Breadcrumb link1="/" linkName1="Users" link2="/app/user/list" linkName2="List" link3="/app/user/create" linkName3="Create user" />
            </Box>
            <Stack direction={{ xs: "column", md: "row" }} spacing={10} mt={3}>
                <ImageBox error={errors.image} image={formData.image} onChange={(img) => handleChange("image", img)} />
                <Box sx={{
                    width: { xs: "100%", md: 1010 }, height: "auto", boxShadow: "0 3px 10px rgba(133, 131, 131, 0.12)", borderRadius: 2,
                    alignItems: "center", p: 3, gap: 3,
                }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="First name" value={formData.firstName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("firstName", e.target.value)}
                                error={errors.firstName}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Last name" value={formData.lastName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("lastName", e.target.value)}
                                error={errors.lastName}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Email" value={formData.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                                error={errors.email}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <PhoneNumberInput
                                value={formData.phone}
                                country={formData.countrycode}
                                onChange={(data) => {
                                    setFormData((prev) => ({
                                        ...prev,
                                        phone: data.phone,
                                        countrycode: data.countrycode,
                                    }));
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <UserInputField PlaceHolder="City" value={formData.city}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("city", e.target.value)}
                                error={errors.city}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <StateInput
                                countryCode={formData.countrycode}
                                value={formData.state}
                                onChange={(value) => handleChange("state", value)}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            {/* <CountryInput PlaceHolder="Country" value={formData.country}
                                onChange={(e) => handleChange("country", e.target.value)}
                                error={errors.country}
                            /> */}
                            <CountryInput
                                PlaceHolder="Country"
                                value={formData.country}
                                onChange={(e: any) => {
                                    handleChange("country", e.target.value);
                                    handleChange("countrycode", e.target.countryCode);
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Address1" value={formData.address1}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("address1", e.target.value)}
                                error={errors.address1}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Address2" value={formData.address2}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("address2", e.target.value)}
                                error={errors.address2}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <UserInputField PlaceHolder="Zip/Postal code" value={formData.zip}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("zip", e.target.value)}
                                error={errors.zip}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <StatusSelecter onChange={(value: string) => handleChange("status", value)} />
                        </Grid>

                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <ListButton contant="Create user" click={handleSubmit} />
                    </Box>
                </Box>
            </Stack>
            <Toaster openToast={openToast} setOpenToast={setOpenToast} contant="User created successfully!" />
        </Box>
    );
};

export default CreateUser;