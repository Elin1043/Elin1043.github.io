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
        👋 Hi there, I’m Elin Forsberg, a young professional in game development
        and software engineering from Sweden 🇸🇪🎮💻
      </Typography>
      <List>
        <Typography variant="h6"> 👩‍💻As a professional:</Typography>
        <ListItem>
          <Typography>
            I'm a driven go-getter who knows how to get things done. My passion
            for learning shines through in both game development and
            programming. My education in Software Engineering equips me with a
            deep understanding of programming and coding principles, providing a
            strong foundation to develop software and games of the highest
            quality. Whether it's tackling complex challenges or working
            collaboratively with my team, I thrive on the excitement of
            problem-solving. Outside work hours, I actively explore various game
            development and programming techniques and continually expand my
            knowledge.
          </Typography>
        </ListItem>
      </List>
      <List>
        <Typography variant="h6">👩‍💼Who am I?</Typography>
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
