import { Container, Divider, Grid, Typography } from "@mui/material";

type HashTagProps = {
  label: string;
  textSize: number;
  withDivider: boolean;
};
export const HashTag = (props: HashTagProps) => {
  const { label, textSize, withDivider } = props;
  return withDivider ? (
    <Grid container>
      <Grid item xs={5} sm={3} md={2}>
        <Container sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: (theme) => theme.palette.secondary.main,
              fontSize: textSize,
            }}
          >
            #
          </Typography>
          <Typography sx={{ fontSize: textSize }}>{label}</Typography>
        </Container>
      </Grid>
      <Grid item xs={7} sm={8} md={8} sx={{ margin: "auto 0" }}>
        <Divider
          sx={{ borderColor: (theme) => theme.palette.secondary.main }}
        ></Divider>
      </Grid>
    </Grid>
  ) : (
    <Container sx={{ display: "flex" }}>
      <Typography
        sx={{
          color: (theme) => theme.palette.secondary.main,
          fontSize: textSize,
        }}
      >
        #
      </Typography>
      <Typography sx={{ fontSize: textSize }}>{label}</Typography>
    </Container>
  );
};
