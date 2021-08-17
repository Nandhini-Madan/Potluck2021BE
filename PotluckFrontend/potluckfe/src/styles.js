import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    // width:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background:'black',
  },
  heading: {
    color: 'white',
    fontWeight:'600',
    
  },
  image: {
    marginLeft: '15px',
    borderRadius:'150%',
  },
  [theme.breakpoints.down('sm')]: {
      mainContainer:{
      flexDirection:"column-reverse"
  
  }
  }

 
}));