import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';



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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


function EPatient() {
  const classes = useStyles();
  const [emergency, setEmergency] = React.useState('');
  const handleChange = (event) => {
    setEmergency(event.target.value);
  }
  return(

    <Container className ={classes.cont} component="main" maxWidth="md">
    <CssBaseline />
    <div className = {classes.paper}>
    <Typography component="h1" variant="h3">
          Edit Patient
     </Typography>
     <form className={classes.form} noValidate>
     <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Patient Name"
        name="name"
        autoComplete="patient-name"
        autoFocus/>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="address"
        label="Address"
        name="address"
        autoComplete="address"
        autoFocus/>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="contact"
        label="Contact No."
        name="contact"
        autoComplete="contact"
        autoFocus/>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="bed"
        label="Bed No."
        name="bed"
        autoComplete="bed"
        autoFocus/>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="doctor"
        label="Doctor ID"
        name="doctor"
        autoComplete="doctor"
        autoFocus/>
        <InputLabel id="emergencylabel">EMERGENCY</InputLabel>
        <Select
          labelId="emergencylabel"
          id="emergency"
          name="emergency"
          value={emergency}
          onChange={handleChange}
          className = {classes.formControl}
        >
          <MenuItem value={'y'}>Yes</MenuItem>
          <MenuItem value={'n'}>No</MenuItem>
        </Select>
        <Button type="submit" fullWidth variant="contained" color="secondary" className= {classes.submit}>
          EDIT
        </Button>
     </form>
    </div>
    </Container>

  );

}

export default EPatient;
