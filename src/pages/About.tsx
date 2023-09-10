import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { SlashTag } from "../components/HelperFunctions";
import ReactLogo from "../assets/SkillsImages/reactIcon.png";
import CSharpLogo from "../assets/SkillsImages/c#Logo.png";
import CssLogo from "../assets/SkillsImages/cssIcon.png";
import DevopsLogo from "../assets/SkillsImages/devopsLogo.png";
import GitLogo from "../assets/SkillsImages/gitLogo.png";
import HtmlLogo from "../assets/SkillsImages/htmlIcon.png";
import JavaLogo from "../assets/SkillsImages/javaLogo.png";
import JavaScriptLogo from "../assets/SkillsImages/javaScriptLogo.png";
import MaterialDesignLogo from "../assets/SkillsImages/materialDesignLogo.png";
import PythonLogo from "../assets/SkillsImages/pythonLogo.png";
import TypeScriptLogo from "../assets/SkillsImages/typeScriptLogo.png";
import UnityLogo from "../assets/SkillsImages/unityLogo.png";
import profileImage from "../assets/femaleProfile.png";

type AboutProps = {
  isSmallScreen: boolean;
};

function About(props: AboutProps) {
  const { isSmallScreen } = props;
  return (
    <Box sx={{ padding: "50px 0" }}>
      <SlashTag label={"About"} textSize={32} withDivider={true}></SlashTag>
      <Box sx={{ height: "100%", alignItems: "center", display: "flex" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid className="observer-target" item xs={12} md={6}>
              <AboutMe></AboutMe>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                className="observer-target"
                sx={{
                  height: { xs: 200, md: 400 },
                }}
                src={profileImage}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ padding: "20px 0" }}>
            <SkillDisplay></SkillDisplay>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

type SkillDisplayProps = {};

const SkillDisplay = (props: SkillDisplayProps) => {
  const skills = SkillsList.map((skill) => (
    <SkillItemDisplay
      image={skill.image}
      text={skill.text}
      category={skill.category}
    />
  ));

  return (
    <Container sx={{ padding: "0px" }}>
      <Grid container textAlign={"center"} spacing={1}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} md={5} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="h1">Skilled in</Typography>
            </Grid>
            <Grid item xs={3} md={5} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>

            <Grid
              container
              sx={{
                padding: "16px 0",
                display: "flex",
                justifyContent: "center",
              }}
              spacing={5}
            >
              {skills}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const SkillItemDisplay = (props: SkillItem) => {
  const { image, text } = props;
  return (
    <Grid className="observer-target" item xs={4} md={3}>
      <Box
        component="img"
        sx={{
          height: { xs: 40, md: 50 },
        }}
        src={image}
      />
      <Typography variant="h6">{text}</Typography>
    </Grid>
  );
};

type SkillItem = {
  image: string;
  text: string;
  category: string;
};

const SkillsList = [
  {
    image: ReactLogo,
    text: "React",
    category: "Web",
  },
  {
    image: HtmlLogo,
    text: "HTML",
    category: "Web",
  },
  {
    image: CssLogo,
    text: "CSS",
    category: "Web",
  },
  {
    image: MaterialDesignLogo,
    text: "Material Design",
    category: "Web",
  },
  {
    image: JavaScriptLogo,
    text: "JavaScript",
    category: "Web",
  },
  {
    image: TypeScriptLogo,
    text: "TypeScript",
    category: "Web",
  },
  {
    image: GitLogo,
    text: "GitHub",
    category: "Tool",
  },
  {
    image: UnityLogo,
    text: "Unity",
    category: "Tool",
  },
  {
    image: DevopsLogo,
    text: "Azure Devops",
    category: "Tool",
  },
  {
    image: CSharpLogo,
    text: "C#",
    category: "Language",
  },
  {
    image: JavaLogo,
    text: "Java",
    category: "Language",
  },
  {
    image: PythonLogo,
    text: "Python",
    category: "Language",
  },
];

const AboutMe: React.FC = () => {
  const theme = useTheme();
  return (
    <Container sx={{ padding: "16px" }}>
      <Typography variant="h5">
        👋 Hi there, I’m Elin Forsberg, a young{" "}
        <span style={{ color: theme.palette.secondary.main }}>
          Game Developer
        </span>{" "}
        and{" "}
        <span style={{ color: theme.palette.secondary.main }}>
          Software Engineer
        </span>{" "}
        from Sweden 🇸🇪🎮💻
      </Typography>
      <List>
        <Typography variant="h6" fontWeight={700}>
          👩‍💻As a professional:
        </Typography>
        <ListItem>
          <Typography variant="h6">
            I'm a driven go-getter who knows how to get things done. My passion
            for learning shines through in both game development and
            programming. My education in Software Engineering equips me with a
            deep understanding of programming and coding principles, providing a
            strong foundation to develop software and games of the highest
            quality.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">
            Whether it's tackling complex challenges or working collaboratively
            with my team, I thrive on the excitement of problem-solving. Outside
            work hours, I actively explore various game development and
            programming techniques and continually expand my knowledge.
          </Typography>
        </ListItem>
      </List>
      <List>
        <Typography variant="h6" fontWeight={700}>
          👩‍💼Who am I?
        </Typography>

        <ul>
          <li style={{ fontSize: "20px" }}>
            I always expresses my opinions and listens to others
          </li>
          <li style={{ fontSize: "20px" }}>I am driven & ambitious</li>
          <li style={{ fontSize: "20px" }}>
            Some call me stubborn, I don't like to give up
          </li>
          <li style={{ fontSize: "20px" }}>I am an anime fan</li>
          <li style={{ fontSize: "20px" }}>I am a gamer</li>
          <li style={{ fontSize: "20px" }}>
            I am a non-coffee-drinker (crazy, I know)
          </li>
        </ul>
      </List>
    </Container>
  );
};

export default About;
