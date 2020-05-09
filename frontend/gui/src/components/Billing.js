import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from './logo.png'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(10,10),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cont : {
    background : '#FFFFFF',
  },
}));

function Billing() {
  const classes = useStyles();

  return(
    <Container className ={classes.cont} component="main" maxWidth="xs">
    <CssBaseline />
    <div className = {classes.paper}>
    <img src={logo} alt="logo" />
    <Typography component="h1" variant="h3">
          Bill
     </Typography>
     <form className={classes.form} noValidate>
     <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Name"
        name="name"
        autoComplete="uname"
        autoFocus/>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="address"
        label="Address"
        id="address"
        autoComplete="address"/>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="amount"
        label="Amount"
        name="amount"
        autoComplete="amount"
        autoFocus/>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="details"
        label="Details"
        name="details"
        autoComplete="details"
        autoFocus/> 
        <Button type="submit" fullWidth variant="contained" color="secondary" className= {classes.submit}>
          BILL
        </Button>
     </form>
    </div>
    </Container>
    
  );

}

export default Billing;

