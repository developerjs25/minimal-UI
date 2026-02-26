import { Box, Typography, Avatar, } from "@mui/material";
import React, { useState } from "react";
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';

const ImageBox = () => {

    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };
    return (
        <Box sx={{ width: 350, height: 400, boxShadow: "0 3px 10px rgba(133, 131, 131, 0.12)", borderRadius: 2, display: "flex", justifyContent: "center", alignItems: "center", }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, }}>
                <input hidden accept="image/*" id="avatar-upload" type="file" onChange={handleFileChange} />
                <Box component="label" htmlFor="avatar-upload" sx={{ cursor: "pointer", borderRadius: "50%", position: "relative", border: "1px dashed #e7e7e7", p: 1, "&:hover .overlay": { opacity: 1, }, }} >
                    <Avatar src={preview || undefined} sx={{ width: 120, height: 120, bgcolor: "#f4f6f8", color: "#888888", }}>
                        {!preview && (
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, }}>
                                <CameraEnhanceIcon sx={{ fontSize: 30, color: "#919EAB" }} />
                                <Typography variant="caption" sx={{ fontSize: 11, color: "#919EAB" }}>Upload photo</Typography>
                            </Box>
                        )}
                    </Avatar>
                    <Box className="overlay" sx={{ position: "absolute", inset: 10, bgcolor: "rgba(0,0,0,0.45)", color: "#fff", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 1, opacity: 0, transition: "opacity 0.3s", }}>
                        <CameraEnhanceIcon sx={{ fontSize: 30, color: "white.main" }} />
                        <Typography variant="caption" sx={{ fontSize: 11, color: "white.main" }}>Upload photo</Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ color: "#919EAB", textAlign: "center", fontSize: 12, }}>
                    Allowed *.jpeg, *.jpg, *.png, *.gif<br />max size of 3 Mb
                </Typography>
            </Box>
        </Box>
    )
}

export default ImageBox
