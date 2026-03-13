import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CoverBox = styled(Box)(({ theme }) => ({
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: 300,
    borderRadius: 16,
    boxShadow: `0 0 2px 0 rgba(145 158 171 / 20%), 0 12px 24px -4px rgba(145 158 171 / 12%)`,
    color: theme.palette.common.white,
}));

export const AvatarImg = styled("img")({
    borderRadius: "50%",
    width: 123,
});

export const InfoCard = styled(Box)(({ theme }) => ({
    boxShadow: `0 0 2px 0 rgba(145 158 171 / 20%), 0 12px 24px -4px rgba(145 158 171 / 12%)`,
    width: "100%",
    padding: theme.spacing(3),
}));
