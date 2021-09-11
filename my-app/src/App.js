import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';


const theme = createTheme({
  /* "background": "#D8E7E1", */
  typography: {
    "fontFamily": `"Lato", sans-serif`,
    h2: {
      fontWeight: 400,
    } 
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <Nav/>
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Link</Link>
              </li>
              <li>
                <Link to="/users">Link2</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/users">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
