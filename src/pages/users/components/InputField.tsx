import { TextField } from "@mui/material";


const InputField = ({ PlaceHolder }: { PlaceHolder: string }) => {
  return (
    <TextField
      label={PlaceHolder}
      variant="outlined"
      fullWidth
      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2, "&.Mui-focused fieldset": { borderColor: "#ffffff", borderWidth: "1px", },},"& .MuiInputLabel-root": { color: "#999fa5",}, "& .MuiInputLabel-root.Mui-focused": { color: "#212B36",},}}
    />
  )
}

export default InputField
