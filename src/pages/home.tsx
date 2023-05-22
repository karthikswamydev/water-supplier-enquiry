import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { HeaderContent } from "../@components";
import { Outline } from "../Layout/Outline";
export const HomePage = (props: any) => {
  //   const [details, setDetails] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    navigate("/businessSelection");
    console.log(data);
  };
  console.log("details", watch());

  return (
    <>
      <Outline>
        <Box sx={{ paddingTop: "1%", paddingLeft: "2%" }}>
          <HeaderContent headingcolor="#38B5FC;" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="car home-input">
              <TextField
                sx={{ width: "400px" }}
                {...register("Fullname", {
                  required: "Fullname name is required",
                })}
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
            </section>
            <section className="home-input">
              <TextField
                sx={{ width: "400px" }}
                {...register("BusinessName", {
                  required: "Business name is required",
                })}
                id="outlined-basic"
                label="Business Name"
                variant="outlined"
              />
            </section>
            <section className="home-input">
              <TextField
                sx={{ width: "400px" }}
                {...register("PhoneNumber", {
                  required: "Phone required",
                })}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </section>
            <section className="home-input">
              <TextField
                sx={{ width: "400px" }}
                {...register("Watsapp", {
                  required: " Watsapp required",
                })}
                id="outlined-basic"
                label="Watsapp Number"
                variant="outlined"
              />
            </section>
            <section className="home-input">
              <FormControl sx={{ width: "400px" }}>
                <InputLabel id="demo-simple-select-label">
                  Select Your Business Type
                </InputLabel>
                <Select
                  variant="outlined"
                  {...register("businessType", {
                    required: "BusinessType is required",
                  })}
                  label="Select Your Business Type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </section>

            <section className="home-input">
              <TextField
                sx={{ width: "200px" }}
                {...register("Bussiness Pindode", {
                  required: "Business Pincode is required",
                })}
                id="outlined-basic"
                label="Business Pincode"
                variant="outlined"
              />
            </section>
            <Box sx={{ textAlign: "Right", marginTop: "10%" }}>
              <Button type="submit" variant="contained">
                Continue
              </Button>
            </Box>
          </form>
        </Box>
      </Outline>
    </>
  );
};
