import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import programmerImage from "../assets/programmer.png";
import {
  Theme,
  createTheme,
  responsiveFontSizes,
  useTheme,
} from "@mui/material/styles";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  const { state } = useLocation();
  const { targetId } = state || {};
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [targetId]);
  return (
    <>
      <Box id="home" sx={{ height: "90vh" }}>
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
                <Typography variant="h1" fontWeight={700}>
                  Hello!
                </Typography>
                <Typography variant="h1">
                  My name is{" "}
                  <span style={{ color: theme.palette.secondary.main }}>
                    Elin Forsberg
                  </span>{" "}
                  and I am a passionate{" "}
                  <span style={{ color: theme.palette.secondary.main }}>
                    Game Developer
                  </span>{" "}
                  and
                  <span style={{ color: theme.palette.secondary.main }}>
                    {" "}
                    Software Engineer
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Link
                  to={"about"}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  key={"aboutButton"}
                >
                  <Button
                    variant="outlined"
                    sx={{ borderColor: theme.palette.secondary.main }}
                  >
                    <span style={{ textTransform: "initial" }}>About me</span>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 250, md: 450 },
              }}
              alt="Image of Elin"
              src={programmerImage}
            />
            <Box
              sx={{
                border: "solid 1px",
                display: "flex",
                alignItems: "center",
                padding: "5px",
                margin: "auto",
                marginTop: "-7px",
                width: { xs: 350, md: 450 },
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
                  <>
                    <span
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      Portfolio
                    </span>
                    <span> and </span>
                    <span
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      Skills
                    </span>
                  </>
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <div id="about">
        <About isSmallScreen={isSmScreen}></About>
      </div>
      <div id="projects">
        <Projects isSmallScreen={isSmScreen}></Projects>
      </div>
      <div id="contact">
        <Contact isSmallScreen={isSmScreen}></Contact>
      </div>
    </>
  );
}

export default Home;
