import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default(state=[], action)=>{
    switch (action.type) {
        case FETCH_ALL:
            
            return action.payload;

        case CREATE:
            
            return [...state, action.payload];
    
        case UPDATE:
       
            return state.map((potluck)=>potluck._id === action.payload._id ? action.payload: potluck);

        case DELETE:
            
            return state.filter((potluck)=>potluck._id !== action.payload);

        default:
            return state;
    }
}