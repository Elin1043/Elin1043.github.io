import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { HashTag } from "../components/HelperFunctions";
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
          <Grid item xs={12} sm={6}>
            <SkillDisplay></SkillDisplay>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const SkillDisplay = () => {
  const webSkills = SkillsList.filter((skill) => skill.category === "Web");

  const webSkillItems = webSkills.map((skill) => (
    <Grid
      item
      key={skill.text}
      xs={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <SkillItemDisplay
        image={skill.image}
        text={skill.text}
        category={skill.category}
      />
    </Grid>
  ));

  const programmingSkills = SkillsList.filter(
    (skill) => skill.category === "Language"
  );

  const programmingSkillsItems = programmingSkills.map((skill) => (
    <Grid
      item
      key={skill.text}
      xs={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <SkillItemDisplay
        image={skill.image}
        text={skill.text}
        category={skill.category}
      />
    </Grid>
  ));

  const tools = SkillsList.filter((skill) => skill.category === "Tool");

  const toolItems = tools.map((skill) => (
    <Grid
      item
      key={skill.text}
      xs={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <SkillItemDisplay
        image={skill.image}
        text={skill.text}
        category={skill.category}
      />
    </Grid>
  ));

  return (
    <Container>
      <Grid container textAlign={"center"} spacing={1}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Web development</Typography>
            </Grid>
            <Grid item xs={4} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
          </Grid>

          <Grid container sx={{ padding: "16px 0" }} spacing={2}>
            {webSkillItems}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Programming Languages</Typography>
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
          </Grid>
          <Grid container sx={{ padding: "16px 0" }} spacing={2}>
            {programmingSkillsItems}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={5} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">Tools</Typography>
            </Grid>
            <Grid item xs={5} sx={{ margin: "auto 0" }}>
              <Divider
                sx={{ borderColor: (theme) => theme.palette.secondary.main }}
              ></Divider>
            </Grid>
          </Grid>
          <Grid container sx={{ padding: "16px 0" }} spacing={2}>
            {toolItems}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const SkillItemDisplay = (props: SkillItem) => {
  const { image, text } = props;
  return (
    <Grid item>
      <Box
        component="img"
        sx={{
          maxHeight: { xs: 30, md: 40 },
        }}
        src={image}
      />
      <Typography>{text}</Typography>
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
    text: "Git",
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
