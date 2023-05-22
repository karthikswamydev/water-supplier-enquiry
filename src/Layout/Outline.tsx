import { Box, Grid } from "@mui/material";

export const Outline = ({ children }: any) => {
  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid container lg={12} sx={{ height: "100%" }}>
        <Grid item lg={2.5} sx={{ height: "100%" }}>
          <img src="images/layout.png" width={"100%"} height={"100%"} />
        </Grid>
        <Grid item lg={9}>
          <Box
            px={8}
            py={8}
            sx={{ maxHeight: "calc(100vh - 20px)", overflow: "auto" }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
