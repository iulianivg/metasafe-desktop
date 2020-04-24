import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SpeedIcon from '@material-ui/icons/Speed';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SecurityIcon from '@material-ui/icons/Security';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import BallotIcon from '@material-ui/icons/Ballot';
import VisibilityIcon from '@material-ui/icons/Visibility';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Recoverbasic from './Recover_basic';
import Recoveradvanced from './Recover_advanced';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import CheckIcon from '@material-ui/icons/Check';
import Chip from '@material-ui/core/Chip';
import Stars from './icons/stars.jpg';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import FastForwardIcon from '@material-ui/icons/FastForward';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import Filter1RoundedIcon from '@material-ui/icons/Filter1Rounded';
import Filter2RoundedIcon from '@material-ui/icons/Filter2Rounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

// import words from './words';
// import { CircularProgress } from '@material-ui/core';
// const Web3 = require("web3");

// var ethers = require("ethers");


// var coinbase = require('coinbase-commerce-node');


  firebase.initializeApp({
    apiKey:"AIzaSyBJdivJB2nHiPv-nrWfAclYdIn3rafksDk",
    authDomain:"metasafe-desktop.firebaseapp.com",
    projectId:"metasafe-desktop",
    databaseURL: "https://metasafe-desktop.firebaseio.com"
  });
  const db = firebase.firestore();



export default class RecoverSeed extends React.Component {

    state = {
        signedIn:'',
        uid:'',
        snackBar:'',
        isPaid:'',
    }


    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({signedIn: !!user,uid:user});
        this.getInfo();
      });

      }
    
    uiConfig = { 
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult : () => false
      }
    }

    getInfo = async() => {
      if(this.state.uid !== null){
      let x = await db.collection('users').doc(this.state.uid.uid);
      x.get().then(doc => {
        if (!doc.exists) {
          this.setState({isPaid:false});
        } else {
          if(doc.data().paid === true) {
            this.setState({isPaid: true})
          } else {
            this.setState({isPaid:false})
          }

        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
    }
      // .doc('ON4Krs2RdNfv5CpvGauE6XlquIj2').get();
    }


    render()
    {
           
    
    

          
        return (


            <div>
               
                <br />

            
            {/* {this.state.signedIn === false || this.state.isPaid === false ? <Recoverbasic /> : null} */}
               {/* {this.state.isPaid === true ? <p>Paid user</p> : <p>not paid</p>} */}
                {this.state.signedIn === true ? (
                  <div>
                    <Grid container>
                    <Grid item xs={4} style={{textAlign:'left'}}>
                    <Button onClick={() => firebase.auth().signOut()}>Sign Out</Button>

                    </Grid>
                    {this.state.signedIn === true && this.state.isPaid === false? (<Grid item xs={8} style={{textAlign:'right'}}> 
                    No Premium Access
                    </Grid>) : null}
                    {this.state.signedIn === true && this.state.isPaid === true ? (                      <Grid item xs={8} style={{textAlign:'right'}}>
                    <Chip
        clickable
        icon={<span style={{border:'1px solid #ffffff',color:'white'}}> MetaSafe</span>}
        label="Premium"
        className="premium"
      />
                    </Grid> ) : null
                    }
                    </Grid>
                    <br /> <br />
                  </div>
                ) : null }
              
                           {this.state.signedIn === false || this.state.isPaid === false ? <Recoverbasic /> : null}

                {this.state.signedIn === false ? (<div>
                  <Grid item xs={12}>

                    You're on the free version. Please sign in and get our premium access to get more features and use our tool on other blockchains than Ethereum.
                        <br /> <br />
                        </Grid> 
                  <Grid item xs={12}>
              <StyledFirebaseAuth 
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        
          />
              </Grid>
              
                   

                </div>) : null}

          {this.state.signedIn === true && this.state.isPaid === false ? (
            <div>
                    <br />
              <Container maxWidth="lg">
               <Grid container spacing={3}> 
              <Grid item xs={5} md={7} lg={8}>
              <Typography component="h2" variant="h5" color="textPrimary">
              Get premium access and level up your power

              </Typography>
              <Typography component="h2" variant="h6" color="textSecondary">
                    Unlimited Features
                    </Typography>
                    <br />
                    <Typography variant="body1" gutterBottom>
        Why losing time when you can get more speed and more features buying our premium access?
      </Typography>
      <Grid container spacing={1}>
      <Grid item xs={6}>
      <HourglassFullIcon /> 
      <p style={{backgroundColor:'#ce0000',color:'white',width:'100%',borderRadius:'50px'}}>FREE</p>
      <p style={{color:'red'}}>Up to 25 seed phrases/s</p>
      
      </Grid>

      <Grid item xs={6}>
      <FastForwardIcon /> 
      <p style={{backgroundColor:'green',color:'white', width:'100%',borderRadius:'50px'}}>PREMIUM</p>
      <p style={{color:'green'}}>Up to 100 seed phrases/s<sup>*</sup></p>
      </Grid>
      </Grid>
      <hr />
      <Typography variant="body1" gutterBottom>
        Don't remember your seed phrase very well? Try two words at the same time
      </Typography>
      <Grid container spacing={1}>
      <Grid item xs={6}>
      <Filter1RoundedIcon /> 
      <p style={{backgroundColor:'#ce0000',color:'white',width:'100%',borderRadius:'50px'}}>FREE</p>
      <p style={{color:'red'}}>2048 attempts / seed phrase</p>
      </Grid>
      <Grid item xs={6}>
      <Filter2RoundedIcon />
      <p style={{backgroundColor:'green',color:'white', width:'100%',borderRadius:'50px'}}>PREMIUM</p>
      <p style={{color:'green'}}>4,194,304 attemps / seed phrase</p>
      </Grid>
      </Grid>
      <hr /> 
      <Typography variant="body1" gutterBottom>
        See what seed phrases are being analyzed
      </Typography>
      <Grid container spacing={1}>
      <Grid item xs={6}>
      <VisibilityOffRoundedIcon /> 
      <p style={{backgroundColor:'#ce0000',color:'white',width:'100%',borderRadius:'50px'}}>FREE</p>
      <CircularProgress style={{color:'#ce0000'}} variant="static" value={21.16} />
      <p>12.1%</p>
      </Grid>
      <Grid item xs={6}>
      <VisibilityRoundedIcon />
      <p style={{backgroundColor:'green',color:'white', width:'100%',borderRadius:'50px'}}>PREMIUM</p>
      <CircularProgress variant="static" value={80.99} />
      <p>89.9%</p>
      <p>+</p>
      <Paper elevation={1} style={{textAlign:'left'}}>

      <div style={{padding:'5px'}}>
      Mnemonic  "door stool foil run clip father lemon panic ranch pole local lawn" with balance 0 has bee found.
      </div>
      <hr />
      <div style={{padding:'5px'}}>
      Mnemonic  "door stool foil run clip father lemon panic ranch pole local license" with balance <span style={{fontWeight:'bold'}}>1.15</span> has bee recovered.
      </div>
      </Paper>
      </Grid>
</Grid>
<hr /> 

<p style={{fontSize:'11px',color:'grey',textAlign:'left'}}>*When fully optimized as recommended in our guidance</p>
              </Grid>
              <Grid item xs={7} md={5} lg={4}>
              <Card>
                <CardHeader
                  title="Premium Access"
                  subheader="Unlimited Features"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  style={{backgroundColor:"#eee"}}
                  // action={tier.title === 'Pro' ? <StarIcon /> : null}
                />
                <CardContent>
                  <div >
                    <Typography component="h2" variant="h5" color="textSecondary">
                      <strike>$189.99</strike>
                    </Typography>
                    <Typography component="h2" variant="h4" color="textPrimary">
                    $79.99
                    </Typography>
                    <Typography variant="h6" color="secondary">
                      Limited Offer
                    </Typography>
                    <br />
                    <ul style={{listStyle:'none',margin:'0',padding:'0'}}>
                    <Typography component="li" variant="subtitle1" align="center">
                        Forever Access, Updates and Premium Features
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        Buy Now Keep It Forever 
                      </Typography>
                    </ul>
                  </div>
                  <br /> <br />
                 <Grid>
                 <LockOpenIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Custom API access 
      </Typography>
      <Typography variant="subtitle2" gutterBottom> 
      Use Infura.io, Quicknode, Etherscan.io, geth or others and increase your performance
      </Typography>
                 </Grid>
                <Divider style={{width:'100%'}} />
                <br />
                 <Grid>
                 <FeaturedPlayListIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Double your power
      </Typography>
      <Typography variant="subtitle2" gutterBottom> 
        Search for two words at the same time 
      </Typography>
                 </Grid>
                 <Divider style={{width:'100%'}} />
                 <br />
                 <Grid>
                 <BallotIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Custom wallet path 
      </Typography>
      <Typography variant="subtitle2" gutterBottom> 
        For those who stored funds deeper than Mariana Trench
      </Typography>
                 </Grid>
                                  <Divider style={{width:'100%'}} />
                                  <br />
                <Grid>
                <VisibilityIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        See it with your eyes
      </Typography>
      <Typography variant="subtitle2" gutterBottom> 
        See what is being analysed and not just a loading icon

      </Typography>
      <Divider style={{width:'100%'}} /> 
      <br />
      <Grid>
      <ViewQuiltIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Other Blockchains
      </Typography>
      <Typography variant="subtitle2" gutterBottom> 
        Do it on other blockchains than Ethereum. 

      </Typography>
      </Grid>
                </Grid>

                     {/* <ul>
                     <Typography component="li" variant="subtitle1" align="center">
                        Just Now
                      </Typography>
                     </ul> */}
                </CardContent>
                <CardActions>
                  <a style={{textDecoration:'none',width:'100%'}} href="https://commerce.coinbase.com/checkout/58f49555-46fe-4106-a921-24d8e14a7122" target="_blank" rel='noopener noreferrer'>
                  <Button fullWidth variant="contained" color="secondary">
                    Buy Now
                  </Button>
                  </a>
                </CardActions>

              </Card>
              </Grid>
               </Grid>
              </Container>

                        <br /> <br />
                       


                </div>

          ) : this.state.signedIn === true && this.state.isPaid === true ? <Recoveradvanced /> : null }


            </div>

        )
    }
}
