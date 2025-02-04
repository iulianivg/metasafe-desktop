import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CachedIcon from '@material-ui/icons/Cached';
import Text from './Text';
import MnemonicMaker from './MnemonicMaker';
import Donate from './Donate.js';
import RecoverSeed from './RecoverSeed.js';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Instruction from './Instruction.js';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch
} from "react-router-dom";
import Disclaimer from './Disclaimer.js';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const [tabOpen,setTabOpen] = React.useState(1);
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const changeTab = (tabNumber) => {
  //       setTabOpen(tabNumber);
  // }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Link to="/disclaimer" style={{textDecoration:'none',color:'grey'}}>
          Disclaimer
      </Link>
      <Divider />
      <List>
        <Link to="/" style={{textDecoration:'none',color:'inherit'}}>
        {/* <ListItem  button onClick={() => changeTab(1)}> */}
          <ListItem  button >
              <ListItemIcon>
                  <HomeIcon htmlColor="#115293" />
              </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItem>
          </Link>
        

          <a href="https://commerce.coinbase.com/checkout/2e098e34-a799-40ca-826f-81c9d10d7d8e" target="_blank" rel='noopener noreferrer' style={{textDecoration:'none',color:'inherit'}}>
          
          <ListItem button>
          <ListItemIcon>
              <ThumbUpIcon htmlColor="#115293" />
          </ListItemIcon>
          <ListItemText primary="Support Us" />
          </ListItem></a>

          
          {/* <ListItem button onClick={() => changeTab(4)}>
              <ListItemIcon>
                  <InfoIcon htmlColor="#115293" />
              </ListItemIcon>
              <ListItemText primary="About Us" />
          </ListItem> */}
{/* 
        {['Home', 'Register/Sign in', 'Send email', 'About Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
                {index === 0 ? <HomeIcon/> : index === 1 ? <PersonIcon /> : index === 3 ? <InfoIcon /> : 
                <MailIcon />}
                </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        <Link to ="/instructions" style={{textDecoration:'none',color:'inherit'}}>
        <ListItem button>
  <ListItemIcon>
    <MenuBookIcon htmlColor="#115293" /> 
    </ListItemIcon>
    <ListItemText primary="Instructions" /> 
        </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <Router >
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap  style={{border:'1px solid white'}}>
           <a href="/" style={{textDecoration:'none',color:'inherit'}}> MetaSafe </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
         <div className={classes.toolbar} />
         <Switch>
          <Route exact path="/">
          <RecoverSeed />
          </Route>

          <Route exact path="/disclaimer">
              <Disclaimer />
          </Route>

          <Route exact path="/instructions">
              <Instruction />
          </Route>
        </Switch>
            {/* {tabOpen === 1 ?         <MnemonicMaker /> : tabOpen=== 2 ? <Text /> :  tabOpen === 3 ? <WHOpage /> : <span />} */}

      </main>
    </div>
    </Router>
  );



        }


ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;