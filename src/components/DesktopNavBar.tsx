import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { MenuItem } from "./MenuItem";
import { Link } from "react-scroll";
import { HashTag } from "./HelperFunctions";

type DesktopNavBarProps = {
  menuValue: string;
  handleChange: Function;
  handleModeUpdate: Function;
  menuItems: Array<MenuItem>;
};

const DesktopNavBar = (props: DesktopNavBarProps) => {
  const { menuValue, handleChange, handleModeUpdate, menuItems } = props;
  return (
    <Grid
      container
      alignItems={"center"}
      sx={{
        position: "sticky",
        zIndex: "1000",
        top: "0",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Grid item xs={2}>
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          key={"homeButton"}
        >
          <Button sx={{ textTransform: "initial", padding: "0" }}>
            <Typography
              variant="h5"
              sx={{ display: "flex", fontWeight: "700" }}
            >
              <SportsEsportsIcon
                fontSize="large"
                sx={{ color: (theme) => theme.palette.secondary.main }}
              ></SportsEsportsIcon>{" "}
              Elin Forsberg
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={9}>
        <Box
          sx={{
            height: "50px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          {menuItems.map((item) => (
            <Link
              to={item.Path.split(" ").join("")}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              key={item.Text}
            >
              <Button
                sx={{
                  minHeight: "48px",
                  pt: 0,
                  pb: 0,
                  "&.Mui-selected": {
                    fontWeight: "700",
                  },
                  overflow: "visible",
                  textTransform: "initial",
                }}
              >
                <HashTag
                  label={item.Text}
                  textSize={20}
                  withDivider={false}
                ></HashTag>
              </Button>
            </Link>
          ))}
        </Box>
      </Grid>
      <Grid item xs={1} sx={{ display: "flex" }}>
        <FormControlLabel
          control={
            <MaterialUISwitch
              onChange={(event, value) => handleModeUpdate(event, value)}
              sx={{ m: 1 }}
              defaultChecked
            />
          }
          label=""
        />
      </Grid>
    </Grid>
  );
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default DesktopNavBar;
