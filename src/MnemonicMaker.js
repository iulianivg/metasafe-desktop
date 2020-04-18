import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SecurityIcon from '@material-ui/icons/Security';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {generateMnemonic12, generateMnemonic24} from 'metasafe-eth';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default class MnemonicMaker extends React.Component {
    state = {
        goodMnemonic:'',
        consecutiveLettersDialog:false,
    }

        
    componentDidMount() {
      window.scrollTo(0, 0)
    }

    
    handleCloseconsecutiveLetters = async() => {
      this.setState({consecutiveLettersDialog:false})
    }


    generateMnemonic = async() => {
        try{
          let mnemonic = await generateMnemonic12();
          this.setState({goodMnemonic:mnemonic.join(" ")});


    
        }catch(err){
          console.log(err.message);
        }
      }
      generateMnemonic24 = async() => {
        try{
          let mnemonic = await generateMnemonic24();
          this.setState({goodMnemonic:mnemonic.join(" ")});

    
        }catch(err){
          console.log(err.message);
        }
      }

    render(){


    
    

          
      return (
          <div style={{width:'100%'}}>
          <Grid container spacing={3}>

                    {/* <Grid item xs = {6} >
                    <Button
        style={{width:'100%',marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="default"
        onClick={this.generateMnemonic}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span></div>}
      >
        Generate Free  Mnemonic  
      </Button>
      {this.state.goodMnemonic !== '' ? this.state.goodMnemonic : <span />}
                    </Grid> */}
        
        <Grid item xs={2} />
        <Grid item xs={8} >
        <Card>
                <CardHeader
                  title="Personal Mnemonic"
                  subheader="A safe ethereum mnemonic for personal use"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={<AccountCircleIcon color="secondary" />}
                />
                <CardContent>
                  <div >
                    <Typography component="h2" variant="h3" color="textPrimary">
                      FREE
                    </Typography>
                  </div>
                  <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Ideal for using dAPPS" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Can be used for cold storage*" secondary="Recommended as long as cold storage measures are applied and is not used on a daily basis" />
        </ListItem>
        </List>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon htmlColor="#4caf50" />
          </ListItemIcon>
          <ListItemText primary="Exponentially lowers the chances of brute-force" />
        </ListItem>
        </List>
        
                </CardContent>
                <CardActions>
                <Button fullWidth
        style={{marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="secondary"
        // onClick={this.generateMnemonic}
        onClick={() => this.setState({consecutiveLettersDialog:true})}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid white',textTransform:'none',color:'white'}}>MetaSafe</span></div>}
      >
        Generate Free  Mnemonic  
      </Button>
                </CardActions>
                <a style={{color:'grey',textDecoration:'none'}} href="https://metasafe.org/terms" target="_blank"  rel='noopener noreferrer'>Terms & Conditions apply</a> 
                {/* {this.state.goodMnemonic !== '' ? this.state.goodMnemonic : <span />} */}

              </Card>
        </Grid>

         
        <Divider style={{width:'100%'}}/>
        <Grid item xs={2} />
        
               
          </Grid>
          <Dialog
          maxWidth={'sm'}
          fullWidth={true}
        open={this.state.consecutiveLettersDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleCloseconsecutiveLetters}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{<div>FREE <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> MNEMONIC</div>}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

<Grid container spacing={2}>
<Grid item xs={6}>
<Button fullWidth
        style={{marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="primary"
        // onClick={this.generateMnemonic}
        onClick={this.generateMnemonic}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid white',textTransform:'none',color:'white'}}>MetaSafe</span></div>}
      >
        Generate 12 Words  Mnemonic  
      </Button>   
      </Grid>   
<Grid item xs={6}>    
      <Button fullWidth
        style={{marginTop:'5px', marginBottom:'10px'}}
        variant="contained"
        color="primary"
        // onClick={this.generateMnemonic}
        onClick={this.generateMnemonic24}
        startIcon={<div><SecurityIcon/><span style={{border:'1px solid white',textTransform:'none',color:'white'}}>MetaSafe</span></div>}
      >
        Generate 24 Words  Mnemonic  
      </Button>  
      </Grid> 
      </Grid>
      <Divider />
      {this.state.goodMnemonic !== '' ? this.state.goodMnemonic : <span />}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseconsecutiveLetters} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
            {/* <h4> We've analysed over 100 million Ethereum mnemonics from which 19.6% did not meet our criteria
                of security. Some mnemonics are exponentially easier to bruteforce. Don't lose your funds to a 
                stupid mistake.  </h4> */}
          </div>

);
}
} 