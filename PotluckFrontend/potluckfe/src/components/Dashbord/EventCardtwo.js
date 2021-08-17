
import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Eventcard from './Eventcard'
import useStyles from './stylestwo'


const EventCardtwo = ({setCurrentId}) => {
    const potlucks = useSelector((state) => state.potlucks);
    const classes=useStyles()
    console.log(potlucks)
    return (
       !potlucks.length ? <CircularProgress/> :(
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
           {potlucks.map((potluck)=>(
               <Grid key={potluck.id} item xs={12} sm={6}>
               <Eventcard potluck={potluck} setCurrentId={setCurrentId}/>
               </Grid>
           ))}
           </Grid>
       )
    )
}

export default EventCardtwo

