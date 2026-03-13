import * as React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Stack, Typography, Avatar, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';
import Images from '../../../constants/Images';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";


export default function RightDrawerWithClose() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value);
  };
  // const accounts = [
  //   { img: Images.Profile, title: "Switch to: Lucian Obrien" },
  //   { img: Images.avtar1, title: "Switch to: Deja Brady" },
  //   { img: Images.avtar2, title: "Switch to: Harrison Stein" },
  // ];

  return (
    <>
      <Box onClick={toggleDrawer(true)} sx={{ position: 'relative', width: 44, height: 44, cursor: 'pointer', }}>
        <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', padding: '2px', background: (theme) => `conic-gradient(#FFAB00, ${theme.palette.success.main}, ${theme.palette.warning.main})`, animation: 'rotateBorder 4s linear infinite', '@keyframes rotateBorder': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' }, }, }}>
          <Box sx={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: theme.palette.background.default, }} /></Box>
        <Avatar src={Images.Profile} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 38, height: 38, zIndex: 1, }} />
      </Box>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} ModalProps={{ BackdropProps: { sx: { backgroundColor: 'transparent' }, }, }}>
        <Box sx={{ width: 320, height: '100vh', position: 'relative', pb: 10, backgroundColor: theme.palette.background.default,}} role="presentation">
          <Box sx={{ p: 2, borderBottom: '1px dotted red.light', }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Stack spacing={4} alignItems="center" mb={3}>
              <Avatar src={Images.Profile} sx={{ width: 90, height: 90 }} />
              <Box textAlign="center">
                <Typography fontWeight={600} >Jaydon Frankie</Typography>
                <Typography variant="body2" color="#637381">demo@minimals.cc</Typography>
              </Box>
            </Stack>
            {/* <Stack direction="row" spacing={1.5} justifyContent="center" mb={3}>
            {accounts.map((account, i) => (
              <Tooltip key={i} title={account.title}>
                <Avatar src={account.img} sx={{  width: 40, height: 40, }}/>
              </Tooltip>
            ))}
            <Tooltip title="Add Account">
              <Avatar sx={{ width: 42, height: 42, bgcolor: 'neutral.light', color: 'primary.light', border: '1px solid red.medium', cursor: 'pointer', '&:hover': { bgcolor: 'neutral.dark',}, }}>
                <AddIcon />
              </Avatar>
            </Tooltip>
          </Stack>   */}
          </Box>
          {/* <Divider sx={{ mb: 2 }} /> */}
          <List sx={{ position: 'relative', borderTop: "1px dashed #919eab33" }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: theme.palette.background.buttonHover}, }}>
                <Stack direction="row" justifyContent="center" gap={1}>
                  <Box component="img" src={Images.Homeicon} sx={{ width: 25, height: 25, marginRight: 1 }} />
                  <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: 14, fontWeight: 500, color: 'neutral.main', }} onClick={() => navigate("/dashboard/*")} />
                </Stack>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: 2, '&:hover': {  backgroundColor: theme.palette.background.buttonHover }, }}>
                <Stack direction="row" justifyContent="center" gap={1}>
                  <Box component="img" src={Images.Profileicon} sx={{ width: 25, height: 25, marginRight: 1 }} />
                  <ListItemText primary="User" primaryTypographyProps={{ fontSize: 14, fontWeight: 500, color: 'neutral.main', }} onClick={() => navigate("/user/profile")} />
                </Stack>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: theme.palette.background.buttonHover }, }}>
                <Stack direction="row" justifyContent="center" gap={1}>
                  <Box component="img" src={Images.Projecticon} sx={{ width: 25, height: 25, marginRight: 1 }} />
                  <ListItemText primary="Products" primaryTypographyProps={{ fontSize: 14, fontWeight: 500, color: 'neutral.main', }} onClick={() => navigate("/products/list")} />
                </Stack>
              </ListItemButton>
            </ListItem>
          </List>
          <Box sx={{ position: 'absolute', bottom: 20, left: 20, right: 20, }}>
            <Button sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 700, fontSize: 14, boxShadow: "none", color: theme.palette.background.logoutButtonColor, backgroundColor:  theme.palette.background.logoutButtonbg, py: 1.5, }} fullWidth variant="contained" size="small" >Logout</Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}