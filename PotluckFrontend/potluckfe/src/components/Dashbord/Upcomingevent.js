
import React,{useState, useEffect} from 'react'
import {Container, Grow, Grid} from '@material-ui/core';
import CreateEvent from './CreateEvent'
import EventCardtwo from './EventCardtwo'
import {useDispatch} from 'react-redux'
import useStyles from './stylestwo'
import {getPotluckInvite}  from '../../actions/potluck'

const Upcomingevent = () => {

    const [currentId, setCurrentId] = useState(null);
    const classes=useStyles()
    const dispatch=useDispatch()

useEffect(() => {
    dispatch(getPotluckInvite())
}, [currentId, dispatch])

    return (
    <Grow in>
             <Container>
             <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                 <Grid item xs={12} sm={7}>
                 <EventCardtwo setCurrentId={setCurrentId}/>
                </Grid>   
                <Grid item xs={12} sm={4}>
                <CreateEvent currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>    
    </Grid>
     </Container>
    </Grow>

       
    )
}

export default Upcomingevent
