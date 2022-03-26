import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo, blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },

    secondary: {
      main: indigo[300],
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
