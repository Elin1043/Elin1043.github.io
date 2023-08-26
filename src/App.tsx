import { Widgets } from '@mui/icons-material';
import './App.css';
import { AppBar, Box, Container, CssBaseline, Grid, Paper, Tab, TableContainer, Tabs, ThemeProvider, Toolbar, createTheme, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
  /*
    const [menuValue, setMenuValue] = useState('Play');

    const menuItems: Array<MenuItem> = [
        { Component: <PlayPage />, Icon: <PlayCircleIcon />, Text: 'Play', Path: "play" },
        { Component: <ResultsPage />, Icon: <AssignmentTurnedInIcon />, Text: 'Results', Path: "results" },
        { Component: <MyGamesPage />, Icon: <SportsSoccerIcon />, Text: 'My Games', Path: "mygames" },
        { Component: <GuidePage />, Icon: <HelpCenterIcon />, Text: 'Guide', Path: "guide" },
    ];
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setMenuValue(newValue);
    };
    
    */

    const theme = createTheme({
      palette: {
          mode: 'dark',
          primary: {
              main: '#D5D8DD',
          },
          secondary: {
              main: '#C4C7CB',

          },
          background: {
              default: '#202124',
              paper: '#2B2C2E',
          }
      },
      typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
              padding: '1rem 0',
              fontSize: '2rem',
          },
          h2: {
              padding: '1rem 0',
              fontSize: '1.5rem',
          },
          h3: {
              padding: '1rem 0',
              fontSize: '1.25rem',
          },
      }
  });


    useEffect(() => {
        // set start path to /play
    }, []);

    const matchesMediumAndUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper sx={{
                // height: '100vh'
            }} elevation={0}>
                <Container>
                    <Grid container item justifyContent={'center'}>

                        <Grid item xs={12}>

                            {/* navbar */}
                            <Grid container sx={{
                                position: 'sticky', zIndex: 4,
                                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(270deg, #004F58 0.91%, #33B04D 100%)',
                                boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.2)',
                            }} >
                                <Grid item xs={12}>
                                    <Tabs
                                        variant='scrollable'
                                        scrollButtons={true}
                                        //value={menuValue}
                                        //onChange={handleChange}
                                        sx={{
                                            height: '48px',
                                            p: 0,
                                            ml: 2,
                                            '.MuiTabs-indicator': {
                                                backgroundColor: 'white',
                                                height: '4px',
                                                transition: 'none'
                                            }
                                        }}>
                                          {/* 
                                        {menuItems.map((item) =>
                                            <Tab
                                                value={item.Text.split(' ').join('')}
                                                key={item.Text}
                                                label={t(item.Text)}
                                                icon={item.Icon}
                                                iconPosition="start"
                                                sx={{
                                                    minHeight: '48px',
                                                    pt: 0,
                                                    pb: 0,
                                                    color: 'white',
                                                    '&.Mui-selected': {
                                                        color: 'white'
                                                    },
                                                    overflow: 'visible'
                                                }}
                                            />
                                        )}
                                        */}
                                    </Tabs>
                                </Grid>
                            </Grid>

                            {/* Content */}
                             {/*
                            {menuValue === 'Play' && <PlayPage />}
                            {menuValue === 'Results' && <ResultsPage />}
                            {menuValue === 'MyGames' && <MyGamesPage />}
                            {menuValue === 'Guide' && <GuidePage />}
                            */}
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </ThemeProvider >
    );
}

export default App;


export type MenuItem = {
    Text: string;
    Icon: JSX.Element;
    Component: JSX.Element;
    Path: string;
};