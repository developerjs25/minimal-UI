import { Box, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import List from "../../../components/list/UserList";
import { FONTS } from "../../../constants/fonts";
import Breadcrumb from "../../../components/breadcrumbs";
import { ListButton } from "../../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ pt: 0 ,px: 9}}>
            <Stack direction="row" spacing={3} mt={3} justifyContent="space-between" alignItems="center" px={2}>
                <Box>
                    <Typography variant="h5" fontWeight={700} mb={3} p={0} sx={{ fontFamily: FONTS.primary, }}>Users</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
                    <ListButton contant="Add user" icon={<AddIcon sx={{ fontSize: 16, mr: 1 }} />} click={() => navigate("/user/create")} />
                </Box>
            </Stack>
            <Box px={2}>
                <Breadcrumb link1="/" linkName1="Dashboard" link2="/user/profile" linkName2="User" link3="/user/list" linkName3="List" />
            </Box>
            <List />
        </Box>
    )
}

export default UserList