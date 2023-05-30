import { Grid, Paper, Typography } from '@mui/material';

function App() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ height: '100%', textAlign: 'center' }}
    >
      <Grid item xs={10} sm={5} md={4} lg={3} xl={3}>
        <Typography variant="h2">Olá!</Typography>
        <Paper>
          <Typography variant="body1">
            Comece a editar agora mesmo! :D! <br /> A Aplicação utiliza o
            Material UI e React Router. <br /> Temos regras de ESLint e Prettier
            configuradas. <br /> Conto com você!
          </Typography>
        </Paper>
        <Typography variant="body1" color="primary">
          Feito com ❤ por <a href="http://gmartinu.dev">Gabriel Martinusso</a>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;
