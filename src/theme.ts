import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .Mui-disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.1)"
          }
        }
      }
    },
    MuiInputLabel: {
    styleOverrides: {
      root: {
        "& .MuiFormLabel-asterisk": {
          color: '#db3131'
        }
      }
    }
    }
  }
});

export default theme;