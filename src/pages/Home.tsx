import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import image from "../assets/headpic.jpg";
import {
  Theme,
  createTheme,
  responsiveFontSizes,
  useTheme,
} from "@mui/material/styles";
import App from "../App";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import CV from "./CV";

// Define your custom theme
let responsiveTheme = createTheme();
responsiveTheme = responsiveFontSizes(responsiveTheme);

type HomeProps = {
  handleChangeValue: (newValue: string) => void;
};

function Home(props: HomeProps) {
  const theme = useTheme();
  const isSmScreen = useMediaQuery((responsiveTheme: Theme) =>
    responsiveTheme.breakpoints.down("sm")
  );
  return (
    <>
      <Box sx={{ height: "90vh" }}>
        <Grid
          container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Grid
              container
              sx={{
                textAlign: isSmScreen ? "center" : "start",
              }}
            >
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <Typography variant="h3">
                  Has a bachelors degree in Software Engineering and is
                  currently working as a Game Developer
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  onClick={() => props.handleChangeValue("Contact")}
                  sx={{ borderColor: theme.palette.secondary.main }}
                >
                  <span style={{ textTransform: "initial" }}>Contact me!</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 250, md: 300 },
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
                margin: "auto",
                marginTop: "-7px",
                width: { xs: 350, md: 400 },
                maxHeight: { xs: 150, md: 100 },
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
          </Grid>
        </Grid>
      </Box>
      <Projects onHomePage={true}></Projects>
      <About onHomePage={true}></About>
      <Contact onHomePage={true}></Contact>
      <CV onHomePage={true} displayCV={!isSmScreen}></CV>
    </>
  );
}

export default Home;
