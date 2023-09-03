import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { ProjectItem } from "../../Types/ProjectsItem";

type ProjectCardProps = {
  project: ProjectItem;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  const theme = useTheme();
  return (
    <Card
      sx={{
        minHeight: "300px",
        minWidth: "275px",
        border: "1px solid",
      }}
    >
      <Box
        component="img"
        sx={{
          maxHeight: { xs: 150, md: 150 },
          width: "100%",
          borderBottom: "1px solid",
        }}
        alt="Image of kitty"
        src={project.image}
      />
      <Container sx={{ height: "30px", borderBottom: "1px solid" }}>
        <Typography variant="body1">{project.skillsAndTools}</Typography>
      </Container>
      <Container>
        <Typography variant="h6" fontWeight={700}>
          {project.projectName}
        </Typography>
        <Typography variant="body1">{project.projectDescription}</Typography>
        <Button
          variant="outlined"
          sx={{
            margin: "10px 0",
            textTransform: "initial",
            borderColor: (theme) => theme.palette.secondary.main,
          }}
        >
          <Typography variant="body1" fontWeight={700}>
            Demo
          </Typography>
        </Button>
      </Container>
    </Card>
  );
};

export default ProjectCard;
