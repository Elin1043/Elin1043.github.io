import { Box, Container, Grid, SvgIcon, Typography } from "@mui/material";
import { HashTag } from "../components/HelperFunctions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// Import the discord svg from "../assets/discordSVG.tsx"
import { ReactComponent as DiscordIcon } from "../assets/discord.svg";

type ContactProps = {
  isSmallScreen: boolean;
};

function Contact(props: ContactProps) {
  const { isSmallScreen } = props;
  return (
    <Container>
      <HashTag label={"contact"} textSize={32} withDivider={true}></HashTag>
      <Grid container sx={{ padding: "50px 0" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Feel free to connect with me on LinkedIn! For any inquiries or
            collaboration opportunities, please don't hesitate to reach out to
            me via email or LinkedIn. I look forward to connecting with fellow
            professionals and enthusiasts in the field of game development and
            programming.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} display={"flex"} justifyContent={"end"}>
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            sx={{ paddingTop: isSmallScreen ? "50px" : "0" }}
          >
            <Grid item xs={4} sm={12} display={"flex"}>
              <LinkedInIcon
                sx={{ height: "32px", width: "32px" }}
              ></LinkedInIcon>
              <Typography>
                <a
                  href="https://www.linkedin.com/in/elin-forsberg-sweden"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  LinkedIn
                </a>
              </Typography>
            </Grid>
            <Grid item xs={8} sm={12} display={"flex"}>
              <EmailIcon sx={{ height: "32px", width: "32px" }}></EmailIcon>
              <Typography>
                <a
                  href="mailto:elinforsbergdev@gmail.com"
                  style={{ color: "white" }}
                >
                  elinforsbergdev@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
