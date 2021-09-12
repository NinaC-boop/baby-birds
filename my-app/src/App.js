import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import Chatbot from './Chatbot/index.js';
=======
import AllResources from '../src/pages/AllResources';
import Chatbot from './components/Chatbot';
>>>>>>> resource-page


const theme = createTheme({
  breakpoints: {
    values: {
      sm: 525,
    }
  },
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
  main: {
    [theme.breakpoints.down(830)]: {
      paddingRight: 0,
    },
    [theme.breakpoints.up(830)]: {
      paddingRight: '10vw',
    },
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} >
      <div className="App">

        
        <Router>
          <nav>
            <Nav/>
          </nav>
        <div className={classes.root}>  
          <div className={classes.main}>
            <Chatbot />
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/all_resources">
                <AllResources />
              </Route>
              <Route path="/">
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
