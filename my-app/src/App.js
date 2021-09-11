import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Chatbot from './components/Chatbot';


const theme = createTheme({
  typography: {
    "fontFamily": `"Lato", sans-serif`,
    h2: {
      fontWeight: 400,
    } 
  },
  palette: {
    background: {
      sm: 'white',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down(425)]: {
      backgroundColor: 'white',
    },
    [theme.breakpoints.up(425)]: {
      backgroundColor: '#D8E7E1',
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} >
      <div className="App">

        
        <Router>
        <div className={classes.root}>
          <nav>
            <Nav/>
            {/* <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Link</Link>
              </li>
              <li>
                <Link to="/users">Link2</Link>
              </li>
            </ul> */}
          </nav>

          <Chatbot />
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
