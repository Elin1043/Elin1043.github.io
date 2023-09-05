import { Box, Divider, Grid } from "@mui/material";
import { HashTag, SlashTag } from "../components/HelperFunctions";

import ProjectCard from "../components/Projects/ProjectCard";
import { ProjectList } from "../Data/ProjectsList";

type ProjectsProps = {};

const Projects = (props: ProjectsProps) => {
  const projectList = ProjectList();
  const projects = projectList.map((projectItem) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={projectItem.id}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <ProjectCard project={projectItem}></ProjectCard>
    </Grid>
  ));
  return (
    <Box>
      <SlashTag label={"Projects"} textSize={32} withDivider={true}></SlashTag>

      <Grid container spacing={2} sx={{ padding: "50px 0" }}>
        {projects}
      </Grid>
    </Box>
  );
};

export default Projects;
