import React, { useState, useMemo } from 'react';

/**
 * MUI
 */
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/**
 * Components
 */
import Router from './Router';

function App() {
  const [tema, setTema] = useState('dark');

  const themeConfig = useMemo(() => createTheme({
		palette: {
			mode: tema,
			primary: {
				main: '#eeff41',
			},
			secondary: {
				main: '#F18F01',
			},
			background: {
				default: tema === 'light' ? '#efefef' : '#1c2025',
				paper: tema === 'light' ? '#fff' : '#282C34'
			}
		},
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          }
        }
      }
    }
	}), [tema]);

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
