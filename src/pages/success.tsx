import { Box, Button, createTheme, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { ThemeProvider } from "styled-components";
import { Outline } from "../Layout/Outline";

export const SuccessPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });
  return (
    <>
      <Outline>
        <Box sx={{ textAlign: "center", paddingTop: "5%" }}>
          <img src="/images/success.svg" />
        </Box>
        <Box sx={{ textAlign: "center", paddingTop: "5%" }}>
          <Typography sx={{ color: "black", fontWeight: "700" }} variant="h6">
            Bookings Successfully Completed
          </Typography>
          <Box sx={{ paddingTop: "2%" }}>
            <Typography
              sx={{ color: "black", fontWeight: "300" }}
              variant="body.1"
            >
              Please reach out to us @+91 836737673 or email us at
              info@waterbookings.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ "& button": { m: 1 }, textAlign: "center", paddingTop: "5%" }}
        >
          <ThemeProvider theme={theme}>
            <Button variant="text">Contact Us</Button>
          </ThemeProvider>
        </Box>
      </Outline>
    </>
  );
};
