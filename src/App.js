import { ColourModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";

export default function App() {
  const [theme, colourMode] = useMode();
  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <TopBar />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}
