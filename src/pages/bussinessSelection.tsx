import { Box, Button, Modal, Typography, } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Outline } from "../Layout/Outline";
import { HeaderContent } from "../@components";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

export const Products = () => {
  const navigate = useNavigate();
  const prod = [
    { label: "Bottled Water", icon: "images/icons/bottlewater.svg" },
    { label: "Beverages", icon: "/images/icons/beverage.svg" },
    { label: "RO-ICE", icon: "/images/icons/ice.svg" },
    { label: "Equipments", icon: "/images/icons/equipments.svg" },
    { label: "Distilled Water", icon: "/images/icons/distilled.svg" },
  ];
  const changeHandler = () => {
    navigate("/delivery");
  };
  return (
    <>
      <Outline>
        <HeaderContent headingcolor="black" />
        <Box sx={{ paddingTop: "6%", paddingLeft: "2%" }}>
          <Typography sx={{ color: "black" }} variant="h6" gutterBottom>
            I Do Bussiness Around
          </Typography>
          <Typography sx={{ color: "black" }} variant="body.1" gutterBottom>
            Select one or many
          </Typography>
        </Box>
        <Box sx={{ "& button": { m: 3 }, paddingTop: "30px" }}>
          {prod.map((el) => (
            <Button
              sx={{ width: "27%", justifyContent: "left", py: "12px" }}
              size="large"
              variant="outlined"
            >
              <Box sx={{ padding: "0 10px", height: "auto" }}>
                <img src={el.icon} />
              </Box>
              {el.label}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            "& button": { m: 1 },
            textAlign: "right",
            paddingTop: "50px",
          }}
        >
          <Button size="large" variant="text">
            Back
          </Button>
          <ThemeProvider theme={theme}>
            <Button onClick={changeHandler} variant="contained">
              continue
            </Button>
          </ThemeProvider>
        </Box>
      </Outline>
    </>
  );
};
export const WaterType = () => {
  const type = [
    "Flavoured",
    "Nutrient",
    "Mineral",
    "Innovative",
    "Spring",
    "Alkaline",
    "Herbal",
  ];
  const [types, setTypes] = useState("");
  console.log(types, "swfeqwrfrg");
  return (
    <>
      <HeaderContent />
      <h2>Bottled Water Types</h2>
      <Typography variant="h6">Select one or many</Typography>
      <Box sx={{ "& button": { m: 1 }, border: "black" }}>
        <div>
          {type.map((el) => (
            <Button
              onClick={(e: any) => {
                console.log("wjefnwjef", e.target.value);
                setTypes(e.target.value);
              }}
              value={types}
              size="large"
              variant="outlined"
            >
              {el}
            </Button>
          ))}
        </div>
      </Box>
      <Box sx={{ "& button": { m: 1 } }}>
        <Button size="large" variant="text">
          Back
        </Button>
        <ThemeProvider theme={theme}>
          <Button variant="contained">continue</Button>
        </ThemeProvider>
      </Box>
    </>
  );
};

export const BeverageType = () => {
  const bevType = [
    "Soft Drinks",
    "Soda & Sparkling",
    "Non Alcholic",
    "Energy Drinks",
    "Sports Drinks",
    "Juices",
  ];
  return (
    <>
      <HeaderContent />
      <h2> Beverages Types</h2>
      <h3>Select one or many</h3>
      <Box sx={{ "& button": { m: 1 } }}>
        <div>
          {bevType.map((el) => (
            <Button size="large" variant="outlined">
              {el}
            </Button>
          ))}
        </div>
      </Box>
      <Box sx={{ "& button": { m: 1 } }}>
        <Button size="large" variant="text">
          Back
        </Button>
        <ThemeProvider theme={theme}>
          <Button variant="contained">continue</Button>
        </ThemeProvider>
      </Box>
    </>
  );
};

// export const PricingPage = () => {
//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 1000,
//     height: 500,
//     bgcolor: "background.paper",
//     borderRadius: "10px",
//     boxShadow: 24,
//     p: 4,
//   };
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <h2>Flavoured water Variants</h2>
//         </Box>
//       </Modal>
//     </>
//   );
// };

export const BusinessSelection = () => {
  return (
    <>
      <Products></Products>
      {/* <WaterType /> */}
      {/* <BeverageType /> */}
      {/* <PricingPage /> */}
    </>
  );
};
