import { Box, Grid, SvgIcon, Typography } from "@mui/material";
import { HashTag } from "../components/HelperFunctions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// Import the discord svg from "../assets/discordSVG.tsx"
import { ReactComponent as DiscordIcon } from "../assets/discord.svg";

type ContactProps = {
  onHomePage: boolean;
};

function Contact(props: ContactProps) {
  const { onHomePage } = props;
  return (
    <>
      <HashTag
        label={"contact"}
        textSize={32}
        withDivider={onHomePage}
      ></HashTag>
      <Grid container>
        <Grid item xs={6}>
          <Typography>
            Feel free to connect with me on LinkedIn! For any inquiries or
            collaboration opportunities, please don't hesitate to reach out to
            me via email or LinkedIn. I look forward to connecting with fellow
            professionals and enthusiasts in the field of game development and
            programming.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign={"center"}>
          <Box>
            <Grid container>
              <Grid item xs={12} display={"flex"}>
                <LinkedInIcon
                  sx={{ height: "32px", width: "32px" }}
                ></LinkedInIcon>
                <Typography>Linkedin</Typography>
              </Grid>
              <Grid item xs={12} display={"flex"}>
                <EmailIcon sx={{ height: "32px", width: "32px" }}></EmailIcon>
                <Typography>Email</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </>
  );
}

export default Contact;
