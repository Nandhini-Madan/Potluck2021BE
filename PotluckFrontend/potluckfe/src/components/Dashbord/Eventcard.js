import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
import { useDispatch } from 'react-redux';
import {deletePotluck}  from '../../actions/potluck'
import useStyles from './style';



const Eventcard = ({potluck, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile')); 
 
    return (
       <Card className={classes.card}>
      
      <div className={classes.overlay}>
        <Typography variant="h6">{potluck.potluckName}</Typography>
      </div>
     {(user?.result?.googleId === potluck?.creator || user?.result?._id === potluck?.creator)&&(
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(potluck.id)}><MoreHorizIcon fontSize="default"/></Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography variant="h6">{potluck.date}</Typography>
      </div>
        <Typography variant="h6">{potluck.time}</Typography>
      <CardContent>
        <Typography variant="h6">{potluck.location}</Typography>
        <Typography variant="h6">{potluck.foodItems}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?.id === potluck?.creator)&&(
 <Button size="small" color="primary" onClick={() => dispatch(deletePotluck(potluck.id))}><DeleteIcon fontSize="small" /> Delete</Button>
        )}
       
      </CardActions>
    </Card>
    )
}

export default Eventcard
