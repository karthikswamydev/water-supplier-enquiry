import { Box, Typography } from "@mui/material";

export const HeaderContent = ({
  headingcolor = "black",
  subHeadingColor = "black",
}) => {
  return (
    <>
      <Box sx={{ paddingLeft: "2%" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: headingcolor, fontWeight: "500" }}
        >
          Suppiler Enquiry
        </Typography>
        <Typography
          sx={{ color: subHeadingColor, fontWeight: "300" }}
          //   variant="body1"
          gutterBottom
        >
          As we discussed over the call please fill in this form for
          registration
        </Typography>
      </Box>
    </>
  );
};
