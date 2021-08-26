import React,{useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import useStyles from './createvStyle';
import { Button,Paper, TextField,Typography } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux'
import {createPotluck, updatePotluck} from '../../actions/potluck'
// import {useHistory} from "react-router";


 const CreateEvent = ({currentId,setCurrentId}) => {
        const classes = useStyles();
        //  const history = useHistory();
        const post= useSelector((state) => currentId ? state.potlucks.find((p)=>p.id === currentId):null);
        const [postData, setPostData] = useState({ potluckName: '', date: '', time: '', location: '',foodItems:'', notes:'' });
        const user = JSON.parse(localStorage.getItem('profile'));
        const dispatch=useDispatch()
        

useEffect(()=>{
    if(post) setPostData(post)
},[post])
  
   const clear = () => {
    setCurrentId(0);
    setPostData({  potluckName: '', date: '', time: '', location: '', notes:'' });
  };
    const handleSubmit= (e) =>{
    e.preventDefault();
    
        dispatch(createPotluck(postData));
         
}

    return (
        
    <Paper className={classes.papers}>
    {/* <Grid className="addevent"> */}
    <Typography color="secondary" variant="h6" component="h1" align="left"> {currentId ?'Editing':'Creating'} Event</Typography>
    <form  autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField name="potluckName" label="PotluckName" fullWidth color="secondary" value={postData.potluckName} onChange={(e) => setPostData({ ...postData, potluckName: e.target.value})}/> 
        <TextField name="date" type="date" fullWidth color="secondary" value={postData.date} onChange={(e) => setPostData({ ...postData, date: e.target.value })}/>
        <TextField name="time" type="time" fullWidth color="secondary" value={postData.time} onChange={(e) => setPostData({ ...postData, time: e.target.value })}/>
        <TextField name="location" label="location" fullWidth color="secondary" value={postData.location} onChange={(e) => setPostData({ ...postData, location: e.target.value })}/>
        <TextField name="foodItems" label="Food Items" fullWidth color="secondary" value={postData.foodItems} onChange={(e) => setPostData({ ...postData, foodItems: e.target.value })}/> 
        <TextField name="notes" label="Note" fullWidth multiline color="secondary"value={postData.notes} onChange={(e) => setPostData({ ...postData, notes: e.target.value })}/>
        <Button variant="contained" fullWidth className={classes.buttonSubmit} type="submit" color="secondary">Create Event</Button>
    </form>
    {/* </Grid> */}
    </Paper>
    
    )
}
export default CreateEvent