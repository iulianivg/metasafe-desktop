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
        snackBar:false,
        isPaid:false,
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
                <h2>Did you forget a word or two of your seed phrase?</h2>
                <p>Our tool gives you a second chance to recover your funds</p>
                <Divider style={{width:'100'}} />
                <br />
                <Grid container spacing={3} style={{backgroundImage:'linear-gradient(rgb(245, 0, 87),black)',}} >
                <Grid item xs={12} style={{color:'white'}} >
                    <h1>Why this tool</h1>
                  </Grid>
                  <Grid item xs={12} md={4} style={{color:'white'}} >
                  <SpeedIcon fontSize="large" htmlColor="red" />
                    <h3>FAST</h3>
                    <p>Up to 100 mnemonic attempts/s</p>
                    <br />
                  </Grid>
                  <Grid item xs={12} md={4} style={{color:'white'}} >
                    <ViewModuleIcon fontSize="large" htmlColor="red" />
                    <h3>Real-Time Blockchain Analysis</h3>
                    <p>Data is checked at the latest block mined</p>
                    <br />

                  </Grid><Grid item xs={12} md={4} style={{color:'white'}} >
                    <SecurityIcon fontSize="large" htmlColor="red" />
                    <h3>Secure</h3>
                    <p>We don't collect or share your data
                    </p>
                  </Grid>

                    <Grid item xs = {3} />
                   
                </Grid>
                <br />
                <Divider style={{width:'100'}} />
            <br />
            
            {this.state.signedIn === false ? <Recoverbasic /> : null}
               {/* {this.state.isPaid === true ? <p>Paid user</p> : <p>not paid</p>} */}
                {this.state.signedIn === true ? (
                  <div>
                    <Grid item xs={12} style={{textAlign:'left'}}>
                    <Button onClick={() => firebase.auth().signOut()}>Sign Out</Button>

                    </Grid>
                    {this.state.isPaid === false ?                     <Recoverbasic /> : null}
                  </div>
                ) : <span /> }
               
                    
                {this.state.signedIn === false ? (<div>
                  <Grid item xs={12}>

                    You're on the free version. Please sign in and get our premium access to get more features.
                        <br /> <br />
                        </Grid> 
                  <Grid item xs={12}>
              <StyledFirebaseAuth 
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        
          />
              </Grid>
              
                   

                </div>) : <span />}

          {this.state.signedIn === true && this.state.isPaid === false ? (
            <div>
                    <br />
              <Container maxWidth="xs">
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
                    $49.99
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
              </Container>

                        <br /> <br />
                       


                </div>

          ) : this.state.signedIn === true && this.state.isPaid === true ? <Recoveradvanced /> : <span /> }


            </div>

        )
    }
}
