import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";


export const ListButton = ({contant ,icon ,click ,width}:any) => {
    const theme = useTheme();

    return (
        <Button variant="contained" sx={{ height: 35, mt: 2, textTransform: "none", borderRadius: 2, fontWeight: 600, color: theme.palette.background.listColor,  backgroundColor: theme.palette.background.whiteBlack, width:width}} startIcon={icon} onClick={click}>
            {contant}
        </Button>
    )
}


