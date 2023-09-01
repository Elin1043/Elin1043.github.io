import { Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { MenuItem } from "./MenuItem";
import { HashTag } from "./HelperFunctions";

type DesktopNavBarProps = {
  menuValue: string;
  handleChange: Function;
  menuItems: Array<MenuItem>;
};

const DesktopNavBar = (props: DesktopNavBarProps) => {
  const { menuValue, handleChange, menuItems } = props;
  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={2}>
        <Typography variant="body1" sx={{ display: "flex", fontWeight: "700" }}>
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
          onChange={(event, value) => handleChange(event, value)}
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
              label={<HashTag label={item.Text} textSize={14}></HashTag>}
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
  );
};

export default DesktopNavBar;
