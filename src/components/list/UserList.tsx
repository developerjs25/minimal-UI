import React, { useState, useEffect } from "react";
import {
    Box, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
    TablePagination, Checkbox, Tab, TextField, Stack, CircularProgress
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { invoices, getUserStatusStyle } from "../contact/UserContant";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import StyledChip from "../chip";
import { FONTS } from "../../constants/fonts";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../popup/Deletepopup";
import ActionMenu from "../ActionMenu";
import { useTheme } from "@mui/material/styles";


const List: React.FC = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [value, setValue] = useState("1");
    const [selected, setSelected] = useState<string[]>([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [openDeletePopup, setOpenDeletePopup] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleDelete = (id: number | null) => {
        if (!id) return;
        console.log("Deleting user with id:", id);
    };
    const handleChangeTab = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setPage(0);
        setSelected([]);
    };

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSelectRow = (id: number) => {
        const strId = id.toString();
        setSelected((prev) =>
            prev.includes(strId)
                ? prev.filter((item) => item !== strId)
                : [...prev, strId]
        );
    };

    const isSelected = (id: number) => selected.includes(id.toString());

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = filteredRows.map((row) =>
                row.id.toString()
            );
            setSelected(newSelected);
        } else {
            setSelected([]);
        }
    };

    const allCount = invoices.length;
    const activeCount = invoices.filter((i) => i.status === "Active").length;
    const pendingCount = invoices.filter((i) => i.status === "Pending").length;

    const filteredRows =
        value === "1"
            ? invoices.filter((inv) =>
                inv.name.toLowerCase().includes(search.toLowerCase())
            )
            : invoices.filter(
                (inv) =>
                    inv.status === (value === "2" ? "Active" : "Pending") &&
                    inv.name.toLowerCase().includes(search.toLowerCase())
            );

    const paginatedRows = filteredRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <Grid>
            <Card sx={{ borderRadius: 3, boxShadow: "0 3px 10px rgba(133, 131, 131, 0.12)", mt: 4, }}>
                <CardContent sx={{ p: 0 ,backgroundColor: theme.palette.background.listColor,}}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider", px: 3, }}>
                            <TabList variant="scrollable" onChange={handleChangeTab} sx={{ 
                                "& .MuiTabs-indicator": { backgroundColor:  theme.palette.background.whiteBlack , }, }} scrollButtons="auto">
                                <Tab sx={{ "&.Mui-selected": { color: theme.palette.background.whiteBlack }, textTransform: "none", }} label={
                                    <Box display="flex" alignItems="center" gap={1}> All
                                        <StyledChip label={allCount.toString()} bgcolor={ theme.palette.background.whiteBlack } color= {theme.palette.background.listColor}  />
                                    </Box>} value="1" />
                                <Tab sx={{ "&.Mui-selected": { color:  theme.palette.background.whiteBlack }, textTransform: "none", }} label={
                                    <Box display="flex" alignItems="center" gap={1}> Active
                                        <StyledChip label={activeCount.toString()} bgcolor={value === "2" ? "#22C55E" : "green.light"} color={value === "2" ? "white.main" : "#00A76F"} />
                                    </Box>} value="2" />
                                <Tab sx={{ "&.Mui-selected": { color: theme.palette.background.whiteBlack  }, textTransform: "none", }} label={
                                    <Box display="flex" alignItems="center" gap={1}>Pending
                                        <StyledChip label={pendingCount.toString()} bgcolor={value === "3" ? "#ffb84d" : "#fdebd1"} color={value === "3" ? "black.main" : "#B76E00"} />
                                    </Box>} value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value={value} sx={{ p: 0 }}>
                            <TextField placeholder="Search..." size="small" value={search} onChange={(e) => setSearch(e.target.value)} sx={{ width: { xs: "100%", sm: 300, md: 400, lg: 550 }, "& .MuiOutlinedInput-root": { borderRadius: 2, py: 1, m: { xs: 1, sm: 2 }, }, "&.Mui-focused fieldset": { borderColor: "#212B36", }, }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: "gray" }} />
                                        </InputAdornment>),
                                }} />
                            <TableContainer sx={{
                                overflowX: "auto", width: "100%", display: "block", position: "relative", borderRadius: "12px",
                                "&::-webkit-scrollbar": { height: "6px", },
                                // "&::-webkit-scrollbar-thumb": { backgroundColor: "#C1C1C1", borderRadius: "10px", },
                                // "&::-webkit-scrollbar-track": { backgroundColor: "#F4F6F8", },
                            }}>
                                <Table sx={{ minWidth: 960 }}>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: theme.palette.background.TableRowColor}}>
                                            <TableCell padding="checkbox" >
                                                <Checkbox indeterminate={selected.length > 0 && selected.length < filteredRows.length}
                                                    checked={filteredRows.length > 0 && selected.length === filteredRows.length}
                                                    onChange={handleSelectAll}
                                                    sx={{ color: "#637381", "&.Mui-checked": { color: "green.main" }, "&.MuiCheckbox-indeterminate": { color: "green.main" }, "& .MuiSvgIcon-root": { borderRadius: "50%", width: 20, height: 20, }, }} />
                                            </TableCell>
                                            <TableCell sx={{ fontFamily: FONTS.primary, fontWeight: 550, color: "#637381" }}> Name</TableCell>
                                            <TableCell sx={{ fontFamily: FONTS.primary, fontWeight: 550, color: "#637381" }}>Phone number</TableCell>
                                            <TableCell sx={{ fontFamily: FONTS.primary, fontWeight: 550, color: "#637381" }}>Company</TableCell>
                                            <TableCell sx={{ fontFamily: FONTS.primary, fontWeight: 550, color: "#637381" }}>Role</TableCell>
                                            <TableCell sx={{ fontFamily: FONTS.primary, fontWeight: 550, color: "#637381" }}>Status</TableCell>
                                            <TableCell align="right" />
                                        </TableRow>
                                    </TableHead>
                                    {loading ? (
                                        <TableRow>
                                            <TableCell colSpan={7} align="center">
                                                <Box sx={{ py: 6, display: "flex", justifyContent: "center", alignItems: "center", }}>
                                                    <CircularProgress sx={{ color: "green.main" }} />
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ) : filteredRows.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} align="center">
                                                <Typography sx={{ py: 4, color: "#637381" }}>
                                                    User not found
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        <TableBody>
                                            {paginatedRows.map((invoice) => {
                                                const isItemSelected = isSelected(invoice.id);
                                                return (
                                                    <TableRow key={invoice.id} selected={isItemSelected} hover sx={{ cursor: "pointer", "&:hover": { backgroundColor: isItemSelected ? "rgba(0, 167, 111, 0.2)" : "rgba(0, 167, 111, 0.08)", }, "&.Mui-selected": { backgroundColor: "rgba(105, 240, 195, 0.16)", "&:hover": { backgroundColor: "rgba(0, 167, 111, 0.2)", }, }, }}>
                                                        <TableCell padding="checkbox" >
                                                            <Checkbox checked={isItemSelected} onChange={() => handleSelectRow(invoice.id)} sx={{ color: "#637381", "&.Mui-checked": { color: "green.main" }, "& .MuiSvgIcon-root": { borderRadius: "50%", width: 20, height: 20 }, }} />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Box display="flex" alignItems="center" gap={1}>
                                                                <Box component="img" src={invoice.image} alt={invoice.name} sx={{ width: 40, height: 40, borderRadius: "50%", }} />
                                                                <Stack>
                                                                    <Typography fontSize={14}>{invoice.name}</Typography>
                                                                    <Typography fontSize={13} color="neutral.main" > {invoice.email} </Typography>
                                                                </Stack>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell>{invoice.number}</TableCell>
                                                        <TableCell>{invoice.company}</TableCell>
                                                        <TableCell>{invoice.role}</TableCell>
                                                        <TableCell>
                                                            <StyledChip label={invoice.status} bgcolor={getUserStatusStyle(invoice.status).backgroundColor}
                                                                color={getUserStatusStyle(invoice.status).color} />
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <ActionMenu onView={() => navigate(`/user/view/${invoice.id}`)}
                                                                onEdit={() => navigate(`/user/edit/${invoice.id}`)}
                                                                onDelete={() => { setSelectedUserId(invoice.id); setOpenDeletePopup(true); }} />

                                                            <DeletePopup open={openDeletePopup}
                                                                onClose={() => setOpenDeletePopup(false)}
                                                                onConfirm={() => { handleDelete(selectedUserId); setOpenDeletePopup(false); }} />
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    )}
                                </Table>
                            </TableContainer>
                            <Stack direction="row" justifyContent="end" px={2}>
                                <TablePagination component="div" count={filteredRows.length} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage} rowsPerPageOptions={[5, 10, 25]} />
                            </Stack>
                        </TabPanel>
                    </TabContext>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default List;