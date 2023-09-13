import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { ProjectItem } from "../../Types/ProjectsItem";
import { useNavigate } from "react-router-dom";

type ProjectCardProps = {
  project: ProjectItem;
  isSmallScreen: boolean;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { project, isSmallScreen } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Card
      sx={{
        minHeight: "500px",
        width: isSmallScreen ? "350px" : "600px",
        textAlign: "center",
        backgroundColor: (theme) => theme.palette.primary.dark,
        boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <Box
        component="img"
        sx={{
          maxHeight: { xs: 300, md: 350 },
          width: "100%",
          alignContent: "center",
          display: "block", // Remove any extra whitespace around the image
          margin: "auto", // Center the image horizontally (optional)
        }}
        alt="Image of project"
        src={project.image}
      />

      <Container>
        <Typography variant="h2" fontWeight={700} sx={{ paddingBottom: "0" }}>
          {project.projectName}
        </Typography>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {project.skillsAndTools.split(",").map((skill, index) => (
            <Grid key={index} item>
              <SkillItem text={skill} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1">{project.projectDescription}</Typography>

        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item>
            <Button
              variant="outlined"
              disabled={project.projectLink === ""}
              onClick={() => {
                navigate(project.projectLink);
                scrollToTop();
              }}
              sx={{
                margin: "10px 0",
                textTransform: "initial",
                borderRadius: "50px",
                borderColor: (theme) => theme.palette.secondary.main,
              }}
            >
              <Typography variant="body1" fontWeight={700}>
                More info
              </Typography>
            </Button>
          </Grid>

          {project.githubLink !== "" && (
            <Grid item>
              <a
                href={project.githubLink}
                target="_blank"
                style={{ color: "white" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    margin: "10px 0",
                    textTransform: "initial",
                    borderRadius: "50px",
                    borderColor: (theme) => theme.palette.secondary.main,
                  }}
                >
                  <Typography variant="body1" fontWeight={700}>
                    Github
                  </Typography>
                </Button>
              </a>
            </Grid>
          )}
        </Grid>
      </Container>
    </Card>
  );
};

type SkillItemProps = {
  text: string;
};

const SkillItem = (props: SkillItemProps) => {
  const { text } = props;
  return (
    <Box
      sx={{
        backgroundColor: "#184057",
        borderRadius: "50px",
        padding: "5px 10px",
        margin: "5px",
        display: "inline-block",
      }}
    >
      <Typography variant="body1" fontWeight={700} color={"#FFF"}>
        {text}
      </Typography>
    </Box>
  );
};

export default ProjectCard;
