import React from "react";

/**
 * MUI
 */
import {
  Paper,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

/**
 * Components
 */
import HeaderForm from './HeaderForm';

const Header = () => {
  return (
    <Container>
      <Paper sx={{p: 3}}>
        <Grid container spacing={2}>
          <Grid container justifyContent="center" xs={12}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/764/901/original/star-wars-free-download-free-png.png"
              width={300}
              height={300}
              alt="Logo de starwar"
            />
          </Grid>
          <HeaderForm />
        </Grid>
      </Paper>
    </Container>
  );
};

export default Header;
