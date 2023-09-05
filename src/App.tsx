import "./App.css";
import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React from "react";
import { MenuItem } from "./components/MenuItem";
import DesktopNavBar from "./components/DesktopNavBar";
import MobileNavBar from "./components/MobileNavbar";

function App() {
  const [menuValue, setMenuValue] = useState("Home");
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const [mode, setMode] = React.useState<"light" | "dark">("dark");

  const theme = React.useMemo(
    () =>
      mode === "dark"
        ? createTheme({
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
          })
        : createTheme({
            palette: {
              mode: "light",
              primary: {
                main: "#000000",
                dark: "#434343",
                light: "#252525",
              },
              secondary: {
                main: "#1AAEFF",
              },
              background: {
                default: "#DCDCDC",
                paper: "#DCDCDC",
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
          }),
    [mode]
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setMenuValue(newValue);
  };

  const handleChangeValue = (newValue: string) => {
    setMenuValue(newValue);
  };

  const handleModeUpdate = (event: React.SyntheticEvent, newValue: string) => {
    setMode(mode === "light" ? "dark" : "light");
  };

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  function getIfPortraitMode() {
    return screenSize.height > screenSize.width;
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  });

  const menuItems: Array<MenuItem> = [
    {
      Text: "Home",
      Path: "home",
    },
    {
      Text: "Projects",
      Path: "projects",
    },
    {
      Text: "About",
      Path: "about",
    },
    {
      Text: "Contact",
      Path: "contact",
    },
  ];

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
          {getIfPortraitMode() ? (
            <MobileNavBar
              handleChange={handleChangeValue}
              menuItems={menuItems}
              handleModeUpdate={handleModeUpdate}
            ></MobileNavBar>
          ) : (
            <DesktopNavBar
              menuValue={menuValue}
              handleChange={handleChange}
              menuItems={menuItems}
              handleModeUpdate={handleModeUpdate}
            ></DesktopNavBar>
          )}

          <Home handleChangeValue={handleChangeValue}></Home>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
