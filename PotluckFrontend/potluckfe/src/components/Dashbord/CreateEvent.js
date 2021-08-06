import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import createEvent from './createEvent.css'
import Grid from '@material-ui/core/Grid';
import { Button, TextField,Typography } from '@material-ui/core';
import axiosWithAuth from '../../utils/axiosWithAuth'




    const useStyles = makeStyles((theme) => ({
        root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
  },
}));
 const CreateEvent = () => {
     const classes = useStyles();
     const [buttonDisabled, setButtonDisabled] = useState(true)

     const [event, setEvent]= useState({
        potluckName: "",
        date:"",
        time: "",
        location: "",
        notes: "",
  });
  
    const formSubmit=e=>{
        e.preventDefault()
        axiosWithAuth().post(':id/addPotluck', event)
        .then((response)=>{
        localStorage.setItem('token', response.data.token)
        // history.push("/") show the created event
    })
}

  const inputChange = e => {
        e.persist();
            setEvent({
                 ...event,
                     [e.target.name]: e.target.value,});
    
  };

    return (
    <Grid className="addevent">
        <Typography variant="h3" component="h1" align="center">
         Create Event
        </Typography>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="PotluckName" color="secondary"/> 
        <TextField id="date" type="date" color="secondary"/>
        <TextField id="time" type="time" color="secondary"/>
        <TextField id="standard-basic" label="location" color="secondary"/>
        <TextField id="standard-textarea"label="Note" multiline color="secondary"
        />
        <Button variant="contained" color="secondary">Submit</Button>
    </form>
    </Grid>
    )
}
export default CreateEvent