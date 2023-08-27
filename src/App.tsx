import "./App.css";
import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const [menuValue, setMenuValue] = useState("Home");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setMenuValue(newValue);
  };
  const handleChangeValue = (newValue: string) => {
    setMenuValue(newValue);
  };

  const menuItems: Array<MenuItem> = [
    {
      Component: <Home handleChangeValue={handleChangeValue} />,
      Text: "Home",
      Path: "home",
    },
    {
      Component: <Projects />,
      Text: "Projects",
      Path: "projects",
    },
    { Component: <CV />, Text: "CV", Path: "cv" },
    {
      Component: <About />,
      Text: "About",
      Path: "about",
    },
    {
      Component: <Contact />,
      Text: "Contact",
      Path: "contact",
    },
  ];

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#D5D8DD",
      },
      secondary: {
        main: "#1AAEFF",
      },
      background: {
        default: "#282C33",
        paper: "#282C33",
      },
    },
    typography: {
      fontFamily: '"Fira Code"',
      h1: {
        padding: "1rem 0",
        fontSize: "2rem",
      },
      h2: {
        padding: "1rem 0",
        fontSize: "1.5rem",
      },
      h3: {
        padding: "1rem 0",
        fontSize: "1.25rem",
      },
    },
  });

  useEffect(() => {
    // set start path to /home
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        sx={{
          height: "100vh",
        }}
        elevation={0}
      >
        <Container>
          <Grid container alignItems={"center"}>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                sx={{ display: "flex", fontWeight: "700" }}
              >
                <SportsEsportsIcon
                  fontSize="medium"
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                ></SportsEsportsIcon>{" "}
                Elin Forsberg
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Tabs
                variant="standard"
                defaultValue={"Home"}
                value={menuValue}
                onChange={handleChange}
                sx={{
                  height: "48px",
                  ".MuiTabs-indicator": {
                    height: "1px",
                  },
                  ".MuiTabs-flexContainer": {
                    justifyContent: "flex-end",
                  },
                  ".MuiTab-root": {
                    textTransform: "lowercase",
                  },
                }}
              >
                {menuItems.map((item) => (
                  <Tab
                    value={item.Text.split(" ").join("")}
                    key={item.Text}
                    label={<HashTag label={item.Text}></HashTag>}
                    sx={{
                      minHeight: "48px",
                      pt: 0,
                      pb: 0,
                      "&.Mui-selected": {
                        color: "white",
                      },
                      overflow: "visible",
                    }}
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>

          {/* Content */}

          {menuValue === "About" && <About />}
          {menuValue === "Contact" && <Contact />}
          {menuValue === "CV" && <CV />}
          {menuValue === "Home" && (
            <Home handleChangeValue={handleChangeValue}></Home>
          )}
          {menuValue === "Projects" && <Projects />}
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

export type MenuItem = {
  Text: string;
  Component: JSX.Element;
  Path: string;
};

type HashTagProps = {
  label: string;
};
export const HashTag = (props: HashTagProps) => {
  return (
    <>
      <Container sx={{ display: "flex" }}>
        <Typography sx={{ color: (theme) => theme.palette.secondary.main }}>
          #
        </Typography>
        <Typography>{props.label}</Typography>
      </Container>
    </>
  );
};
