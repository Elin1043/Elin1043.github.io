import { Box, Container, Grid, Typography } from "@mui/material";
import { HashTag, SlashTag } from "../components/HelperFunctions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

type ContactProps = {
  isSmallScreen: boolean;
};

function Contact(props: ContactProps) {
  const { isSmallScreen } = props;
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <SlashTag label={"Contact"} textSize={32} withDivider={true}></SlashTag>
      <Container>
        <Grid container sx={{ padding: "50px 0" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1">
              Feel free to connect with me on LinkedIn! For any inquiries or
              collaboration opportunities, please don't hesitate to reach out to
              me via email or LinkedIn. I look forward to connecting with fellow
              professionals and enthusiasts in the field of game development and
              programming.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} display={"flex"} justifyContent={"end"}>
            <Grid
              container
              display={"flex"}
              justifyContent={"center"}
              sx={{ paddingTop: isSmallScreen ? "50px" : "0" }}
            >
              <Grid item xs={4} sm={8} display={"flex"}>
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
              <Grid item xs={8} sm={8} display={"flex"}>
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
    </Box>
  );
}

export default Contact;
