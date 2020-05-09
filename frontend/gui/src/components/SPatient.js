import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

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
    background : '#FFFFFF',
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
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    // height: '125vh',
    // width: 'calc(200vw * 0.54 - 2%)',
    borderRadius: 40,
    backgroundRepeat: 'no-repeat',
    // display: 'flex',
    marginLeft: '10px',
    marginTop: '0px',
    marginRight : '10px',
    marginBottom : '100px',

  },
  appbar :
  {
    background : '#000000',
  }
  
}));



function SPatient(){
  const [category, setCategory] = React.useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  }
  const classes = useStyles();

  return(

      
      <div className={classes.root}  >
      <AppBar position="static" />
      <Toolbar className={classes.appbar}> 
      <Grid item xs={6}>
          <TextField
        variant="filled"
        margin="normal"
        required
        fullWidth
        style={{
        backgroundColor: "white",
          }}
        id="search"
        label="Search"
        name="search"
        autoComplete="search"
        autoFocus/>
        </Grid>
        <Grid item xs={3}>
        <InputLabel id="choose"
        style={{
        color: "white",
          }}>CHOOSE</InputLabel>
          <Select
          labelId="choose"
          id="category"
          name="category"
          style={{
        backgroundColor: "white",
          }}
          value={category}
          onChange={handleChange}
          className = {classes.formControl}
        >
          <MenuItem value={'name'}>Name</MenuItem>
          <MenuItem value={'id'}>ID</MenuItem>
        </Select>
        </Grid>
        <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          Search
          </Button>
        </Toolbar>
      <CssBaseline />
      <Grid container spacing={3}> 

        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          EDIT
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          RELEASE
          </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          DECEASED
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Button type="submit"  variant="contained" color="secondary" className= {classes.submit}>
          BILLING
          </Button>
          </Paper>
        </Grid>
        </Grid>
        <div>
        <List className={classes.root}>
      <ListItem alignItems="flex-start">

        <ListItemText
          primary="Akash Roy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Details
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">

        <ListItemText
          primary="Akash Roy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Details
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">

        <ListItemText
          primary="Akash Roy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Details
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">

        <ListItemText
          primary="Akash Roy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Details
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">

        <ListItemText
          primary="Akash Roy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Details
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">

        <ListItemText
          primary="Akash Roy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Details
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </div>

    </div>
    )
}


export default SPatient;

