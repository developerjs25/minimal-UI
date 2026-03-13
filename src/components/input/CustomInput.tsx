import { TextField } from "@mui/material";
import type { UserInputFieldProps } from "../../Types";

export const UserInputField: React.FC<UserInputFieldProps> = ({ PlaceHolder, row , value, onChange, error = false, helperText = "", }) => {
  return (
    <TextField label={PlaceHolder} multiline rows={row} variant="outlined" fullWidth value={value} onChange={onChange} error={error} helperText={error ? helperText : ""}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          "&.Mui-focused fieldset": { borderColor: error ? "#FF5630" : "#212B36", borderWidth: "1px", },
        },
        "& .MuiInputLabel-root": {   color: error ? "#FF5630" : "#999fa5",},
        "& .MuiInputLabel-root.Mui-focused": { color: error ? "#FF5630" : "#212B36", },
      }}
    />
  );
};