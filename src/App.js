import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navigation from "./pages/Navigation";

// import './App.css';
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  //   secondary: {
  //     main: "#11cb5f",
  //   },
  // },
});

function App() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",

      }}
    >
      <ThemeProvider theme={theme}>
        
        <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
