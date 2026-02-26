import * as React from 'react';
import { Box, Drawer, Button } from '@mui/material';
import { Card, CardContent, Typography, Tabs, Tab, Stack, Chip } from "@mui/material";
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import { NotificationContant } from './../Contant';

export default function Notification() {
    const [open, setOpen] = React.useState(false);
    const [tab, setTab] = React.useState(0);

    const toggleDrawer = (value: boolean) => () => {
        setOpen(value);
    };

    return (
        <>
            <Box onClick={toggleDrawer(true)} sx={{ px: 1, cursor: 'pointer', }}>
                <NotificationImportantIcon sx={{ color: "neutral.main" }} />
            </Box>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} ModalProps={{ BackdropProps: { sx: { backgroundColor: 'transparent' }, }, }}>
                <Box sx={{ width: 440, height: '100vh' }} role="presentation">
                    <Card sx={{ border: 0 }} elevation={0}>
                        <CardContent sx={{ p: 0 }}>
                            <Typography variant="h6" fontWeight={600} p={3}> Related applications</Typography>
                            <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)} variant="fullWidth" sx={{ mb: 2, backgroundColor: "#F4F6F8", p: 2 }} TabIndicatorProps={{ sx: { display: 'none' } }}>
                                <Tab disableRipple sx={{
                                    textTransform: 'none', fontWeight: 600, color: 'primary.light', borderRadius: 2, minHeight: 36, height: 36, minWidth: 20, '&.Mui-selected': { backgroundColor: 'white.main', color: 'black.main', },
                                }}
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}> All
                                            <Chip label={22} size="small" sx={{
                                                fontSize: 12, fontWeight: 700, borderRadius: 1, backgroundColor: 'black.gray',
                                                color: 'white.main',
                                            }} />
                                        </Box>
                                    }/>
                                <Tab disableRipple sx={{
                                    textTransform: 'none', fontWeight: 600, color: 'primary.light', borderRadius: 2, minHeight: 36, height: 36, minWidth: 20, '&.Mui-selected': { backgroundColor: 'white.main', color: 'black.main', },
                                }}
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}> Unread
                                            <Chip label={22} size="small" sx={{
                                                fontSize: 12, fontWeight: 700, borderRadius: 1, backgroundColor: '#bee7ee',
                                                color: 'primary.main',
                                                '.Mui-selected &': {
                                                    backgroundColor: 'primary.main',
                                                    color: 'white.main',
                                                },
                                            }} />
                                        </Box>
                                    }/>
                            </Tabs>
                            {NotificationContant.map((notification, index) => (
                                <Stack key={index} spacing={2} borderBottom={0.5} borderColor="#eeeeee">
                                    <Box paddingX={3} paddingY={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Box component="img" sx={{ width: 20, height: 20, borderRadius: 1 }} src={notification.img} alt="shipping app" />
                                            <Box flexGrow={1}>
                                                <Typography variant="body1" fontWeight={550} fontSize={13}>{notification.title}</Typography>
                                                <Typography variant="body1" fontWeight={550} fontSize={12} color='#919EAB'>{notification.time}</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Stack>
                            ))}
                        </CardContent>
                    </Card>
                    <Box sx={{ position: 'absolute', bottom: 20, left: 20, right: 20, }}>
                        <Button sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 700, color: 'red.dark', backgroundColor: 'orange.light', '&:hover': { backgroundColor: 'orange.dark' }, py: 1.3, }} fullWidth variant="contained" size="small" >Logout</Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}