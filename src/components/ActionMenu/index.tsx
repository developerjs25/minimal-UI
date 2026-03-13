import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, Typography, } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


const ActionMenu = ({ onView, onEdit, onDelete }: { onView: () => void; onEdit: () => void; onDelete: () => void; }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleView = () => {
        onView();
        handleClose();
    };

    const handleEdit = () => {
        onEdit();
        handleClose();
    };

    const handleDelete = () => {
        onDelete();
        handleClose();
    };

    return (
        <>
            <IconButton aria-label="more" aria-controls={open ? "action-menu" : undefined} aria-haspopup="true" onClick={handleClick} size="small" >
                <MoreVertIcon />
            </IconButton>
            <Menu id="action-menu" anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{sx: { minWidth: 80, borderRadius: 3, p: 0.4, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)", }, }} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleView} sx={{ borderRadius: 2 }}>
                    <ListItemIcon><VisibilityIcon fontSize="small"  /></ListItemIcon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>View</Typography>
                </MenuItem>
                <MenuItem onClick={handleEdit} >
                    <ListItemIcon><EditIcon fontSize="small"  /></ListItemIcon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Edit</Typography>
                </MenuItem>
                <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
                    <ListItemIcon sx={{ color: "error.main" }}><DeleteOutlineIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="body2" color="error.main" sx={{ fontWeight: 600 }}>Delete</Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default ActionMenu;