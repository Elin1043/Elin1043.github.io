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

export const theme = createTheme({
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

function App() {
  const [menuValue, setMenuValue] = useState("Home");
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setMenuValue(newValue);
  };

  const handleChangeValue = (newValue: string) => {
    setMenuValue(newValue);
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
      Component: <Home handleChangeValue={handleChangeValue} />,
      Text: "Home",
      Path: "home",
    },
    {
      Component: <Projects />,
      Text: "Projects",
      Path: "projects",
    },
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
    { Component: <CV displayCV={false} />, Text: "CV", Path: "cv" },
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
            ></MobileNavBar>
          ) : (
            <DesktopNavBar
              menuValue={menuValue}
              handleChange={handleChange}
              menuItems={menuItems}
            ></DesktopNavBar>
          )}

          {/* Content */}
          {menuValue === "About" && <About />}
          {menuValue === "Contact" && <Contact />}
          {menuValue === "CV" && <CV displayCV={screenSize.width >= 700} />}
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
