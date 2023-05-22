import { Padding } from "@mui/icons-material";
import {
  Modal,
  Box,
  Button,
  Checkbox,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const PricingModal = () => {
  const amt = [
    { qty: "300ml" },
    { qty: "500ml" },
    { qty: "1 ltr" },
    { qty: "2ltr" },
    { qty: "5ltr" },
  ];
  const variants = [
    {
      label: "Flavoured",
    },
    { label: "Minerals" },
    { label: "Nutrient" },
    { label: "Vitamin" },
    { label: "Minerals & Nutrients" },
    { label: "Minerals & Vitamins" },
    { label: "Nutrient & Vitmamin" },
    { label: "Materials,Nutrient & Vitamin" },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    height: 500,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              fontWeight: "700",
              fontHeight: "27px",
              paddingLeft: "11px",
              fontFamily: "Manrope",
            }}
          >
            Flavoured Water Variants
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              paddingTop: "20px",
            }}
          >
            {variants.map((el) => (
              <Box>
                <Checkbox />
                {el.label}
              </Box>
            ))}
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: "700",
                fontHeight: "27px",
                paddingTop: "20px",
                paddingLeft: "11px",
                fontFamily: "Manrope",
              }}
            >
              Flovoured Water : Pricing
            </Typography>
          </Box>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "40px",
            }}
          >
            {amt.map((el) => {
              return (
                <Grid
                  sx={{
                    gap: "40px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "11px",
                  }}
                  mb={2}
                >
                  <Box sx={{ width: "140px", display: "inline-flex" }}>
                    {el.qty}{" "}
                  </Box>
                  <TextField
                    id="outlined-basic"
                    label="Qty in box"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
