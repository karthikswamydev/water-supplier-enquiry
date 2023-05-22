import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  Box,
  ThemeProvider,
  createTheme,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Outline } from "../Layout/Outline";

export const Delivery = (props: any) => {
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
        <Box sx={{ paddingTop: "6%", paddingLeft: "3%" }}>
          <Typography sx={{ color: "black" }} variant="h4" gutterBottom>
            My Delivery Area
          </Typography>
          <Typography gutterBottom>
            We Deliver in these areas and pincodes
          </Typography>
        </Box>

        <Box sx={{ paddingTop: "1%", paddingLeft: "2%", display: "flex" }}>
          <section className="home-input">
            <TextField
              sx={{ width: "200px" }}
              id="outlined-basic"
              label="Delivery Radius in km"
              variant="outlined"
            />
          </section>
          <section className="home-input">
            <TextField
              sx={{ width: "400px" }}
              id="outlined-basic"
              label="Bussiness Address"
              variant="outlined"
            />
          </section>
        </Box>

        <Box sx={{ paddingTop: "6%", paddingLeft: "3%" }}>
          <section className="home-input">
            <Typography>
              Search for Location and Pincodes for your supply
            </Typography>
          </section>

          <TextField
            sx={{ width: "800px" }}
            id="outlined-basic"
            label="Location"
            variant="outlined"
          />
        </Box>

        <Box
          sx={{ "& button": { m: 1 }, textAlign: "Right", marginTop: "10%" }}
        >
          <Button size="large" variant="text">
            Back
          </Button>
          <ThemeProvider theme={theme}>
            <Button onClick={() => navigate("/upload")} variant="contained">
              continue
            </Button>
          </ThemeProvider>
        </Box>
      </Outline>
    </>
  );
};
