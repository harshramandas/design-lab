import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from './logo.png'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background : '#000000',
    border : '0px',
  },
  type: {
    marginTop: '30px',
    marginBottom: '30px',
    marginLeft: '30px',
    marginRight: '30px',
    color : "#FFFFFF"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    flexGrow: 1,
    background : '#FFFFFF',
    backgroundImage: "url(" + "./logo.png" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    // height: '125vh',
    // width: 'calc(200vw * 0.54 - 2%)',
    borderRadius: 40,
    backgroundRepeat: 'no-repeat',
    // display: 'flex',
    marginLeft: '10px',
    marginTop: '100px',
    marginRight : '10px',
    marginBottom : '100px',

  },
  appbar :
  {
    background : '#000000',
  }
  
}));



function Home(){
  const classes = useStyles()
  const [p, setP] = React.useState(6);
  const [b, setB] = React.useState(50);

  return(
    <div>
      <AppBar position="static" />
      <Toolbar className={classes.appbar}/>
      <div className={classes.root}  >
      <CssBaseline />
      <Grid container spacing={3}> 
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography variant="h5" component="h2" className={classes.type}>
          Patients : {p}
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          Add Patient
          </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography variant="h5" component="h2" className={classes.type}>
          Beds Available : {b-p}
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          Doctor Details
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          Refresh
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          Patient Details
          </Button>
          </Paper>
        </Grid>
        
        
      </Grid>
      <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          Logout!
          </Button>
    </div>
    </div>
    )
}


export default Home;

