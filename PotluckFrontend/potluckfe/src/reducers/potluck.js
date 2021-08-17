import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default(potlucks=[], action)=>{
    switch (action.type) {
        case FETCH_ALL:
            
            return action.payload;

        case CREATE:
            
            return [...potlucks, action.payload];
    
        case UPDATE:
       
            return potlucks.map((potluck)=>potluck.id === action.payload.id ? action.payload: potluck);

        case DELETE:
            
            return potlucks.filter((potluck)=>potluck.id !== action.payload);

        default:
            return potlucks;
    }
}