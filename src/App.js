import DineMenu from "./pages/DineMenu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

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
        background: "#FAF9FB",
      }}
      >
    <ThemeProvider theme={theme}>
      <DineMenu />
    </ThemeProvider>
    </div>
  );
}

export default App;
