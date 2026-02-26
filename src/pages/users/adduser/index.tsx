import { Box, Link, Breadcrumbs, Stack, Typography, Button,  Grid, } from "@mui/material";
import ImageBox from "../components/ImageBox";
import InputField from "../components/InputField";


const AddUser = () => {
    return (
        <Box sx={{ maxWidth: 1100, mx: "auto", pt: 0 }}>
            <Typography variant="h5" fontWeight={700} mb={3} p={0}>Create a new user</Typography>
            <Breadcrumbs separator="•" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/" sx={{ fontSize: 14, color: "black.main" }}> Dashboard</Link>
                <Link underline="hover" color="inherit" href="/dashboard/user" sx={{ fontSize: 14, color: "black.main" }}> User</Link>
                <Typography sx={{ color: 'primary.light', fontSize: 14 }}>AddUser</Typography>
            </Breadcrumbs>
            <Stack direction="row" spacing={3} mt={3}>
                <ImageBox />
                <Box sx={{ width: 750, height: "auto", boxShadow: "0 3px 10px rgba(133, 131, 131, 0.12)", borderRadius: 2, alignItems: "center", p: 3, gap: 3, }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ flexGrow: 1 }}>
                            <InputField PlaceHolder="Full name" />
                        </Grid>
                        <Grid sx={{ flexGrow: 1 }}>
                            <InputField PlaceHolder="Email address" />
                        </Grid>
                        <Grid sx={{ flexGrow: 1 }}>
                            <InputField PlaceHolder="Enter phone number" />
                        </Grid>
                        <Grid sx={{ flexGrow: 1 }}>
                            <InputField PlaceHolder="Country" />
                        </Grid>
                        <Grid sx={{ flexGrow: 1 }}>
                            <InputField PlaceHolder="City" />
                        </Grid>
                        <Grid sx={{ flexGrow: 1 }}>
                            <InputField PlaceHolder="Address" />
                        </Grid>
                        <Grid sx={{ flexGrow: 1 }}>
                            <InputField PlaceHolder="Zip code" />
                        </Grid>
                        <Grid sx={{ flexGrow: 1 }}>
                            <InputField PlaceHolder="Role" />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
                        <Button variant="contained" sx={{ height: 35, width: 120, mt: 2, textTransform: "none", borderRadius: 2, fontWeight: 600, bgcolor: "black.main", color: "white.main", }}>
                            Create user
                        </Button>
                    </Box>
                </Box>
            </Stack>

        </Box>
    )
}

export default AddUser
