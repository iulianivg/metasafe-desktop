import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Project from './icons/new_project.png'
import Secret from './icons/project_secret.png'
import Write from './icons/write_info.png'
import Result from './icons/result.png';
import Result2 from './icons/result2.png';
import Recover from './icons/recover2.png';
export default class Instructions extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <div>
            <Container maxWidth="md">
            <Typography variant="h5" style={{fontWeight:'bold'}} gutterBottom>
Instructions for <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> recovery tool      </Typography>

            </Container>
<br />
            <Container>

            <Typography variant="h6" style={{fontWeight:'bold', textAlign:'left',color:'#3f51b5'}} gutterBottom>
                Basic Account (FREE)

                </Typography>
                <Divider style={{width:'100%'}} />
                <Typography variant="subtitle2" gutterBottom style={{textAlign:'left',fontWeight:'bold'}}>
        Step 1 - Infura Account 
      </Typography>
      <p style={{textAlign:'left'}}>
      Navigate to <a href="https://infura.io" target="_blank"  rel='noopener noreferrer'>Infura.io</a> and create an account. Then create a new project.
      </p>
      <img src={Project} width="100%" />
      <p style={{textAlign:'left'}}>
         Copy your API key/endpoint which starts with "https://"
      </p>
      <img src={Secret} width="100%" />
      <Typography variant="subtitle2" gutterBottom style={{textAlign:'left',fontWeight:'bold'}}>
        Step 2 - Analyze your seed phrase 
      </Typography>
      <p style={{textAlign:'left'}}>
    Paste your API link. Select the word you don't remember and write your seed phrases. Click on "Recover Seed Phrase" and wait a few seconds. 
      </p>
      <img src={Write} width="100%" />
      <p style={{textAlign:'left'}}>
            If the analyzer finds anything it will let you know! You can now use the seed phrase to recover your funds. 
      </p>
      <img src={Result} width="100%" />
      <br /> <br /> <br />
      <Typography variant="h6" style={{fontWeight:'bold', textAlign:'left',color:'#3f51b5'}} gutterBottom>
                Premium Account

                </Typography>
                <Divider style={{width:'100%'}} />
                <Typography variant="subtitle2" gutterBottom style={{textAlign:'left',fontWeight:'bold'}}>
        Step 1 - Set up 
      </Typography>
      <p style={{textAlign:'left'}}>
            Log in into your <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> account. Use  <a href="https://infura.io" target="_blank"  rel='noopener noreferrer'>Infura.io</a>,  <a href="https://https://www.quiknode.io/" target="_blank"  rel='noopener noreferrer'>Quiknode.io</a>  or download your own blockchain node. 
            Set-up your wallet path and decide how many words at the same time you want the tool to recover. Write your seed phrase and click on "Recover Seed Phrase".
      </p>
      <img src={Recover} width="100%" />
      <Typography variant="subtitle2" gutterBottom style={{textAlign:'left',fontWeight:'bold'}}>
        Step 2 - Recover your funds
      </Typography>
      <p style={{textAlign:'left'}}>
            The tool will attempt up to 4,194,304 word combinations! The premium account allows you to see what is being analysed rather than just getting your results. This will give you a better idea if 
            it's close to recover your seed phrase or not. This process can take anything between 10 minutes - 2 hours depending on your setup and hardware specifications. 
      </p>
      <br /> <br /> <br />
      <Typography variant="h6" style={{fontWeight:'bold', textAlign:'left',color:'#3f51b5'}} gutterBottom>
                Performance and Security

                </Typography>
                <Divider style={{width:'100%'}} />
                <p style={{textAlign:'left'}}>
               To achieve the highest security and best perfomance level, you should download a blockchain node on your local machine. After your node has synchronized with the 
               network, you should stop your internet connection and use our tool (using as API the blockchain's data). In geth you may use the default RPC address 127.0.0.1 with RPC port 8545. 
               If for some reasons you can't use your own blockchain node then you will have to use an internet connection to get blockchain data from a service. To achieve the highest performance you 
               can use a private node managed by one company such as   <a href="https://https://www.quiknode.io/" target="_blank"  rel='noopener noreferrer'>Quiknode.io</a>. Make sure that if you use 
               an internet service the blockchain data is always sent through HTTPS and never through HTTP. The private node (not shared) will increase your performance exponentially and you will see 
               results much faster.  
      </p>
      <br /> <br /> <br />
      <Typography variant="h6" style={{fontWeight:'bold', textAlign:'left',color:'#3f51b5'}} gutterBottom>
                Other Blockchains

                </Typography>
                <Divider style={{width:'100%'}} />
                <p style={{textAlign:'left'}}>
                By standard <span style={{border:'1px solid black',textTransform:'none'}}>MetaSafe</span> recovery tool is set up to work on Ethereum wallets. You can make it work on other blockchains such as 
                Ethereum Classic, TomoChain, EOSClassic, etc. by setting up the correct wallet path. 

<br />
                <span style={{fontWeight:'bold'}}>Bitcoin, Litecoin and other</span> deterministic wallets are also supported however our tool won't be able to find the balance behind wallets. Instead, you will get a list 
                of all seed phrases that you can try to remember and use to access your wallet depending on which one you retain appropriate. 

                </p>
                <img src={Result2} width="100%" />
            </Container>
                 
                </div>
        )
    }
}