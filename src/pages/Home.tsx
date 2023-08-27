import { Box, Button, Container, Grid, Typography } from "@mui/material";
import image from "../assets/headpic.jpg";
import { useTheme } from "@mui/material/styles";
import App from "../App";

type HomeProps = {
  handleChangeValue: (newValue: string) => void;
};

function Home(props: HomeProps) {
  const theme = useTheme();
  return (
    <Box sx={{ height: "90vh" }}>
      <Grid
        container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item lg={6}>
          <Grid container>
            <Grid item>
              <Typography variant="h1">
                Elin Forsberg is a{" "}
                <span style={{ color: theme.palette.secondary.main }}>
                  Game Developer
                </span>{" "}
                and{" "}
                <span style={{ color: theme.palette.secondary.main }}>
                  Software Engineer
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">
                Has a bachelors degree in Software Engineering and is currently
                working as a Game Developer
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={() => props.handleChangeValue("Contact")}
              >
                C <span style={{ textTransform: "lowercase" }}>ontact me</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Container
            sx={{ textAlign: "center", maxWidth: { xs: 150, md: 400 } }}
          >
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 150, md: 400 },
              }}
              alt="Image of Elin"
              src={image}
            />
            <Box
              sx={{
                border: "solid 1px",
                display: "flex",
                alignItems: "center",
                padding: "5px",
                marginTop: "-7px",
                width: { xs: 150, md: 400 },
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: (theme) => theme.palette.secondary.main,
                }}
              ></Box>
              <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                Currently working on{" "}
                {
                  <span
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    Portfolio
                  </span>
                }
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
