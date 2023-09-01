import { Container, Typography } from "@mui/material";
import { Variant } from "@testing-library/react";

type HashTagProps = {
  label: string;
  textSize: number;
};
export const HashTag = (props: HashTagProps) => {
  const { label, textSize } = props;
  return (
    <Container sx={{ display: "flex" }}>
      <Typography
        sx={{
          color: (theme) => theme.palette.secondary.main,
          fontSize: textSize,
        }}
      >
        #
      </Typography>
      <Typography sx={{ fontSize: textSize }}>{props.label}</Typography>
    </Container>
  );
};
