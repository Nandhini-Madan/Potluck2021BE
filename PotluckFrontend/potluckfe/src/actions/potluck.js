import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import axiosWithAuth from '../utils/axiosWithAuth'

// action creator
export const getPotluckInvite=()=> async(dispatch)=>{
    try {
        const{data}= await axiosWithAuth.get(":userId/potluckList")

        dispatch({type:FETCH_ALL, payload:data})
    } catch (error) {
        console.log(error.message)
    }
}


export const createPotluck=(potluck)=> async(dispatch)=>{
    try {
        const{data}= await axiosWithAuth().post(":id/addPotluck",potluck)

        dispatch({type:CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePotluck=(id,potluck)=> async(dispatch)=>{
    try {
        const {data}= await axiosWithAuth().put(":id/editPotluck",id,potluck)
        
        dispatch({type:UPDATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePotluck=(id)=> async(dispatch)=>{
    try {
         await axiosWithAuth().delete(":id/deletePotluck",id)
        dispatch({type:DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}