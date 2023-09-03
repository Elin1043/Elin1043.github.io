import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { HashTag } from "../components/HelperFunctions";
import { theme } from "../App";

type AboutProps = {};

function About(props: AboutProps) {
  return (
    <Box>
      <HashTag label={"about"} textSize={32} withDivider={true}></HashTag>
      <Box sx={{ height: "90vh" }}>
        <Grid
          container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Grid container>
              <AboutMe></AboutMe>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5">
        👋Hi there, I'm Elin, a young game developer and game enthusiast 🎮
      </Typography>
      <List>
        <Typography variant="body1"> 👩‍💻As a professional:</Typography>
        <ListItem>
          <Typography>
            I have 5+ years of experience working with game development through
            school and personal projects, and I have more than a year of
            hands-on experience in my current role. I have experience working
            with the Unity game engine, am proficient in C#, and have a strong
            foundation in Java, Mobile Development, Python, HTML, and coding
            principles like OOP and SOLID. I've hunted and fixed bugs,
            refactored code, and optimized projects for both Android and iOS.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            I'm a driven go-getter who knows how to get things done and
            prioritize tasks. I always enjoy learning new skills and techniques,
            and solving challenging problems with my team always gives me a
            dopamine rush. Outside work hours, I like to test out various game
            development techniques and watch tutorials to expand my knowledge.
          </Typography>
        </ListItem>
      </List>
      <List>
        <Typography variant="body1">👩‍💼Who am I?</Typography>
        <Typography>
          <ul>
            <li>Always expresses my opinions and listens to others</li>
            <li>Driven & ambitious</li>
            <li>Some call me stubborn, I don't like to give up</li>
            <li>Anime fan</li>
            <li>Game nerd</li>
            <li>Non-Coffee-drinker (crazy, I know)</li>
          </ul>
        </Typography>
      </List>
    </Container>
  );
};

export default About;
