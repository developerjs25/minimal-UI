import { Box, Link, Breadcrumbs, Stack, Typography, Button, Grid, } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import List from "../components/List";


const UserList = () => {
    return (
        <Box sx={{ maxWidth: 1100, mx: "auto", pt: 0 }}>
            <Stack direction="row" spacing={3} mt={3} justifyContent="space-between" alignItems="center">
                <Box>
                    <Typography variant="h5" fontWeight={700} mb={3} p={0}>UserList</Typography>
                    <Breadcrumbs separator="•" aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" sx={{ fontSize: 14, color: "black.main" }}> Dashboard</Link>
                        <Link underline="hover" color="inherit" href="/dashboard/user" sx={{ fontSize: 14, color: "black.main" }}> User</Link>
                        <Typography sx={{ color: 'primary.light', fontSize: 14 }}>UserList</Typography>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
                    <Button variant="contained" sx={{ height: 35, width: 120, mt: 2, textTransform: "none", borderRadius: 2, fontWeight: 600, bgcolor: "black.main", color: "white.main", }}>
                        <AddIcon sx={{ fontSize: 16, mr: 1 }} /> Add user
                    </Button>
                </Box>
            </Stack>
         <List />
        </Box>
    )
}

export default UserList