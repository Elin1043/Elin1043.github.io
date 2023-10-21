import { Box, Grid, Typography } from "@mui/material";
import { SlashTag } from "../components/HelperFunctions";

import ProjectCard from "../components/Projects/ProjectCard";
import { ProjectList } from "../Data/ProjectsList";

type ProjectsProps = {
  isSmallScreen: boolean;
};

const Projects = (props: ProjectsProps) => {
  const projectList = ProjectList();

  // Get the projects that have the "personal" projectCategory
  const personalProjectsList = projectList.filter(
    (project) => project.projectCategory === "Personal"
  );

  const professionalProjectsList = projectList.filter(
    (project) => project.projectCategory === "Professional"
  );

  const personalProjects = personalProjectsList.map((projectItem) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      key={projectItem.id}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <ProjectCard
        project={projectItem}
        isSmallScreen={props.isSmallScreen}
      ></ProjectCard>
    </Grid>
  ));
  const professionalProjects = professionalProjectsList.map((projectItem) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      key={projectItem.id}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <ProjectCard
        project={projectItem}
        isSmallScreen={props.isSmallScreen}
      ></ProjectCard>
    </Grid>
  ));
  return (
    <Box>
      <SlashTag label={"Projects"} textSize={32} withDivider={true}></SlashTag>
      <SlashTag
        label={"Professional projects"}
        textSize={26}
        withDivider={false}
      ></SlashTag>
      <Grid container spacing={5} sx={{ padding: "50px 0" }}>
        {professionalProjects}
      </Grid>

      <SlashTag
        label={"Personal projects"}
        textSize={26}
        withDivider={false}
      ></SlashTag>
      <Grid container spacing={5} sx={{ padding: "50px 0" }}>
        {personalProjects}
      </Grid>
    </Box>
  );
};

export default Projects;
