import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { HashTag } from "../components/HelperFunctions";

type AboutProps = {
  onHomePage: boolean;
};

function About(props: AboutProps) {
  const { onHomePage } = props;
  return (
    <Box sx={{ paddingTop: "20px" }}>
      <HashTag label={"about"} textSize={32} withDivider={onHomePage}></HashTag>
      <Box>
        <Grid
          container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6}>
            <AboutMe></AboutMe>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const AboutMe: React.FC = () => {
  return (
    <Container sx={{ padding: "16px" }}>
      <Typography variant="h6">
        👋 Hi there, I’m Elin Forsberg, a young professional in game development
        and software engineering from Sweden 🇸🇪🎮💻
      </Typography>
      <List>
        <Typography variant="body1" fontWeight={700}>
          {" "}
          👩‍💻As a professional:
        </Typography>
        <ListItem>
          <Typography variant="body1">
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
        <Typography variant="body1" fontWeight={700}>
          👩‍💼Who am I?
        </Typography>
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
