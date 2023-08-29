import {
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { MenuItem } from "./MenuItem";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type MobileNavBarProps = {
  handleChange: Function;
  menuItems: Array<MenuItem>;
};

const MobileNavBar = (props: MobileNavBarProps) => {
  const { handleChange, menuItems } = props;
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer =
    (open: boolean) => (event: React.SyntheticEvent<Element, Event>) => {
      //changes the function state according to the value of open
      setState(open);
    };

  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={6}>
        <Typography variant="body1" sx={{ display: "flex", fontWeight: "700" }}>
          <SportsEsportsIcon
            fontSize="medium"
            sx={{ color: (theme) => theme.palette.secondary.main }}
          ></SportsEsportsIcon>{" "}
          Elin Forsberg
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            mr: 2,
            display: {
              xs: "block",
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* The outside of the drawer */}
        <Drawer
          //from which side the drawer slides in
          anchor="right"
          //if open is true --> drawer is shown
          open={open}
          //function that is called when the drawer should close
          onClose={toggleDrawer(false)}
        >
          {/* The inside of the drawer */}
          <Box
            sx={{
              p: 2,
              height: 1,
              backgroundColor: (theme) => theme.palette.background.paper,
            }}
          >
            {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
            <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>

            <Box sx={{ mb: 2 }}>
              {menuItems.map((item) => (
                <Box
                  sx={{
                    borderBottom: "1px solid",
                    borderColor: "rgba(255, 255, 255, 0.12)",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <ListItemButton
                    key={item.Text}
                    style={{ alignItems: "center", display: "flex" }}
                    onClick={() => handleChange(item.Text)}
                  >
                    <ListItemText
                      sx={{
                        minHeight: "30px",
                        pt: 0,
                        pb: 0,
                        "&.Mui-selected": {
                          color: "white",
                        },
                        alignItems: "center",
                        display: "flex",
                      }}
                      primary={<HashTag label={item.Text}></HashTag>}
                    />
                  </ListItemButton>
                </Box>
              ))}
            </Box>
          </Box>
        </Drawer>
      </Grid>
    </Grid>
  );
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

export default MobileNavBar;
