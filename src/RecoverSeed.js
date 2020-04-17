import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import SpeedIcon from '@material-ui/icons/Speed';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SecurityIcon from '@material-ui/icons/Security';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import BallotIcon from '@material-ui/icons/Ballot';
import VisibilityIcon from '@material-ui/icons/Visibility';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Recover_basic from './Recover_basic';
import Recover_advanced from './Recover_advanced';
import recovery from './Smart Contract/recovery';
import words from './words';
import { CircularProgress } from '@material-ui/core';
const Web3 = require("web3");

var ethers = require("ethers");




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
      let query = x.get().then(doc => {
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
                <Grid xs={12} style={{color:'white'}} >
                    <h1>Why this tool</h1>
                  </Grid>
                  <Grid xs={12} md={4} style={{color:'white'}} >
                  <SpeedIcon fontSize="large" htmlColor="red" />
                    <h3>FAST</h3>
                    <p>Up to 100 mnemonic attempts/s</p>
                    <br />
                  </Grid>
                  <Grid xs={12} md={4} style={{color:'white'}} >
                    <ViewModuleIcon fontSize="large" htmlColor="red" />
                    <h3>Real-Time Blockchain Analysis</h3>
                    <p>Data is checked at the latest block mined</p>
                    <br />

                  </Grid><Grid xs={12} md={4} style={{color:'white'}} >
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
            
            {this.state.signedIn === false ? <Recover_basic /> : null}
               {/* {this.state.isPaid === true ? <p>Paid user</p> : <p>not paid</p>} */}
                {this.state.signedIn === true ? (
                  <div>
                    <Grid item xs={12}>
                    <Button onClick={() => firebase.auth().signOut()}>Sign Out</Button>

                    </Grid>
                    {this.state.isPaid === false ?                     <Recover_basic /> : null}
                  </div>
                ) : <span /> }
               
                    
                {this.state.signedIn === false ? (<div>
                  <Grid item xs={12}>
              <StyledFirebaseAuth 
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        
          />
              </Grid>
              <Grid item xs={12}>

                    You're on the free version. Please sign in and get our premium access to benefit from the following:
                        <br /> <br />
                        </Grid> 
                    <Grid container spacing={3}>
                <Grid item xs={4}>
                    <LockOpenIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Custom API access 
      </Typography>
      <Typography variant="subtitle2" gutterBotton> 
        Use Infura.io, Quicknode, Etherscan.io, geth or others
      </Typography>
      
      </Grid>
      <Grid item xs={4}>
                    <FeaturedPlayListIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Double your power
      </Typography>
      <Typography variant="subtitle2" gutterBotton> 
        Search for two words at the same time 
      </Typography>
      
      </Grid>
      <Grid item xs={4}>
                    <BallotIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Custom wallet path 
      </Typography>
      <Typography variant="subtitle2" gutterBotton> 
        For those who stored funds deeper than Mariana Trench
      </Typography>
      
      </Grid>
      <Divider style={{width:'100%'}} />
      <Grid item xs={4} /> 
      <Grid item xs={4}>
      <VisibilityIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        See it with your eyes
      </Typography>
      <Typography variant="subtitle2" gutterBotton> 
        See what is being analysed and not just a loading icon

      </Typography>
      <Divider style={{width:'100%'}} />
      </Grid>


                </Grid>

                </div>) : <span />}

          {this.state.signedIn === true && this.state.isPaid === false ? (
            <div>
                    You're still on the free version. Purchase our premium access now
                    <br />
                    <Button variant="contained" color="primary">Buy Now</Button>
                        <br /> <br />
                        <h4>Here is what you are missing</h4>
                        <br /> <br />
                    <Grid container spacing={3}>
                <Grid item xs={4}>
                    <LockOpenIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Custom API access 
      </Typography>
      <Typography variant="subtitle2" gutterBotton> 
        Use Infura.io, Quicknode, Etherscan.io, geth or others
      </Typography>
      
      </Grid>
      <Grid item xs={4}>
                    <FeaturedPlayListIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Double your power
      </Typography>
      <Typography variant="subtitle2" gutterBotton> 
        Search for two words at the same time 
      </Typography>
      
      </Grid>
      <Grid item xs={4}>
                    <BallotIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        Custom wallet path 
      </Typography>
      <Typography variant="subtitle2" gutterBotton> 
        For those who stored funds deeper than Mariana Trench
      </Typography>
      
      </Grid>
      <Divider style={{width:'100%'}} />
      <Grid item xs={4} /> 
      <Grid item xs={4}>
      <VisibilityIcon fontSize="large"/>
                    <Typography variant="h6" gutterBottom>
        See it with your eyes
      </Typography>
      <Typography variant="subtitle2" gutterBotton> 
        See what is being analysed and not just a loading icon

      </Typography>
      <Divider style={{width:'100%'}} />
      </Grid>


                </Grid>

                </div>

          ) : this.state.signedIn === true && this.state.isPaid === true ? <Recover_advanced /> : <span /> }


            </div>

        )
    }
}
