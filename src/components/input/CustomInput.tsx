import type { PhoneInputFieldProps, StateProps, UserInputFieldProps } from "../../Types";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Autocomplete, TextField, Box, InputAdornment, Stack,  } from "@mui/material";
import { countries, statesByCountry } from "../contact/Inputcontant";
import { useMemo } from "react";
// import { statesByCountry } from "./statesData";

export const UserInputField: React.FC<UserInputFieldProps> = ({ PlaceHolder, row, value, onChange, error = false, helperText = "", }) => {
  const theme = useTheme();
  return (
    <TextField label={PlaceHolder} multiline rows={row} variant="outlined" fullWidth value={value} onChange={onChange} error={error} helperText={error ? helperText : ""}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          "&.Mui-focused fieldset": { borderColor: error ? "#FF5630" : theme.palette.background.Inputborder, borderWidth: "1px", },
        },
        "& .MuiInputLabel-root": { color: error ? "#FF5630" : "#999fa5", },
        "& .MuiInputLabel-root.Mui-focused": { color: error ? "#FF5630" : theme.palette.background.whiteBlack, },
      }}
    />
  );
};

export const PhoneNumberInput: React.FC<PhoneInputFieldProps> = ({ PlaceHolder, error = false, helperText = "", value = "", onChange, country, }) => {
  const theme = useTheme();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!country) return;

    const normalized = country.toString().replace("+", "").trim();

    const foundCountry = countries.find((c) => {
      return c.phone === normalized;
    });

    if (foundCountry) {
      setSelectedCountry(foundCountry);
    }
  }, [country]);


  return (
    <Autocomplete options={countries} value={selectedCountry} inputValue={value || ""} open={open} openOnFocus={false} onOpen={() => { }} onClose={() => setOpen(false)}
      onInputChange={(event, newValue, reason) => {
        if (reason === "input" && onChange) {

          const numericValue = newValue.replace(/\D/g, "");

          onChange({
            phone: numericValue,
            countrycode: `+${selectedCountry.phone}`,
          });
        }
      }}
      onChange={(event, newValue) => {
        if (newValue && typeof newValue !== "string") {
          setSelectedCountry(newValue);

          if (onChange) {
            onChange({
              phone: value || "",
              countrycode: `+${newValue.phone}`,
            });
          }
        }
        setOpen(false);
      }}

      filterOptions={(x) => x} freeSolo clearOnBlur={false} getOptionLabel={() => ""}

      slotProps={{ paper: { sx: { backgroundColor: theme.palette.background.listColor, borderRadius: 2, }, }, }}

      renderOption={(props, option) => (
        <Box component="li" {...props} sx={{ borderRadius: 2, mb: 1, mx: 1 }}>
          <img width="20" height="20" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt="" style={{ borderRadius: "50%", marginRight: 10 }} />
          <Stack>
            <Box>{option.label}</Box>
            <Box fontSize={12}>(+{option.phone})</Box>
          </Stack>
        </Box>
      )}

      renderInput={(params) => (
        <TextField {...params} label={PlaceHolder} helperText={error ? helperText : ""} error={error}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              "&.Mui-focused fieldset": { borderColor: error ? "#FF5630" : theme.palette.background.Inputborder, borderWidth: "1px", },
            },
            "& .MuiInputLabel-root": { color: error ? "#FF5630" : "#999fa5", },
            "& .MuiInputLabel-root.Mui-focused": { color: error ? "#FF5630" : theme.palette.background.whiteBlack, },
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <Box onMouseDown={(e) => e.preventDefault()} onClick={() => setOpen(true)} sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer", }}>
                    <img width="20" height="20" src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt="" style={{ borderRadius: "50%" }} />
                    +{selectedCountry.phone}
                  </Box>
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};


export const CountryInput: React.FC<UserInputFieldProps> = ({ PlaceHolder, error = false, helperText = "", value = "", onChange }) => {
  const theme = useTheme();
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      value={countries.find(c => c.label === value) || null}

      onChange={(event, newValue) => {
        onChange?.({
          target: {
            value: newValue ? newValue.label : "",
            countryCode: newValue ? newValue.code : "",
          },
        } as any);
      }}
      slotProps={{ paper: { sx: { backgroundColor: theme.palette.background.listColor, borderRadius: 2, }, }, }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        return (
          <Box key={key} component="li" sx={{
            '& > img': { mr: 2, flexShrink: 0 }, borderRadius: 2, mb: 1, mx: 1,
            "&:hover": { backgroundColor: theme.palette.background.buttonHover },
          }}{...optionProps}>
            <img loading="lazy" width="20" height="20" srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt="" style={{ borderRadius: "50%", objectFit: "cover" }} />
            {option.label} ({option.code})
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params} error={error}
          label={PlaceHolder} helperText={error ? helperText : ""}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2, "&.Mui-focused fieldset": { borderColor: error ? "#FF5630" : theme.palette.background.Inputborder, borderWidth: "1px", },
            },
            "& .MuiInputLabel-root": { color: error ? "#FF5630" : "#999fa5", },
            "& .MuiInputLabel-root.Mui-focused": { color: error ? "#FF5630" : theme.palette.background.whiteBlack, },
          }}

          InputProps={{
            ...params.InputProps,
          }}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

export const StateInput: React.FC<StateProps> = ({
  countryCode,
  value = "",
  onChange,
  error = false,
  helperText = "",
}) => {
  const theme = useTheme();

  const options = useMemo(() => {
    return countryCode ? statesByCountry[countryCode] || [] : [];
  }, [countryCode]);

  const selectedState = options.find((s) => s.label === value) || null;

  return (
    <Autocomplete
      options={options}
      value={selectedState}
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        onChange?.(newValue ? newValue.label : "");
      }}
      disabled={!countryCode}
      slotProps={{
        paper: {
          sx: {
            mt: 1,
            borderRadius: 2,
            backgroundColor: theme.palette.background.listColor,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
            border: `1px solid ${theme.palette.divider}`,
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="State / Province"
          placeholder={
            countryCode
              ? "Select state"
              : "Select country first"
          }
          error={error}
          helperText={error ? helperText : ""}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2, "&.Mui-focused fieldset": { borderColor: error ? "#FF5630" : theme.palette.background.Inputborder, borderWidth: "1px", },
            },
            "& .MuiInputLabel-root": { color: error ? "#FF5630" : "#999fa5", },
            "& .MuiInputLabel-root.Mui-focused": { color: error ? "#FF5630" : theme.palette.background.whiteBlack, },
          }}
        />
      )}
    />
  );
};