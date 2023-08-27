import { Box, Grid, Typography } from "@mui/material";

type HomeProps = {};

function Home(props: HomeProps) {
  return (
    <Box sx={{ height: "90vh", backgroundColor: "grey" }}>
      <Grid container sx={{ backgroundColor: "red" }}>
        <Typography variant="h2">
          Elin Forsberg is a Game Developer and Software Engineer
        </Typography>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="HeadPic.jpg"
        />
      </Grid>
    </Box>
  );
}

export default Home;
