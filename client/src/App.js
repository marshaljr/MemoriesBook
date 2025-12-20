import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts.js";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import styles from "./styles.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar sx={styles.appBar} position="static" color="inherit">
          <Box sx={styles.box}>
            <Typography sx={styles.heading} variant="h4">
              Memories
            </Typography>
            <img
              sx={styles.image}
              src="https://img.icons8.com/?size=100&id=fQ6woAztcECt&format=png&color=000000"
              alt="memories"
              height={64}
              width={64}
              align="center"
            />
          </Box>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}>
              <Grid size={{ xs: 12, sm: 7 }}>
                <Posts />
              </Grid>
              <Grid size={{ xs: 12, sm: 5 }}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
};

export default App;
