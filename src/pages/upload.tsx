import { Box, Button, createTheme, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Outline } from "../Layout/Outline";

export const Upload = () => {
  const navigate = useNavigate();
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
        <Box sx={{ paddingTop: "15%" }}>
          <Box sx={{ textAlign: "center" }}>
            <img src="/images/upload.svg" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: "black" }} variant="h5">
              Upload your Products Catalogue Images
            </Typography>
            <Typography sx={{ color: "black", fontWeight: "300" }} variant="h6">
              Drag and Drop or select here
            </Typography>
            <Typography sx={{ color: "black", fontWeight: "300" }} variant="h6">
              Please upload minimim of 5 images, with all Products convered
            </Typography>
          </Box>
          <Box
            sx={{
              "& button": { m: 1 },
              textAlign: "center",
              paddingTop: "5%",
            }}
          >
            <ThemeProvider theme={theme}>
              <Button onClick={() => navigate("/successPage")} variant="text">
                continue
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Outline>
    </>
  );
};
