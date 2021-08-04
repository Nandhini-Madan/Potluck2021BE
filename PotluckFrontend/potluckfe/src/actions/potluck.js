import {axiosWithAuth} from '../utils/axiosWithAuth'
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// action creator
export const getPotluckInvite=()=> async(dispatch)=>{
    try {
        const{data}= await axiosWithAuth.get("users")

        dispatch({type:FETCH_ALL, payload:data})
    } catch (error) {
        console.log(error.message)
    }
}


export const createPotluck=(pot)=> async(dispatch)=>{
    try {
        const{data}= await axiosWithAuth().post(":id/addPotluck",pot)

        dispatch({type:CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePotluck=(id,post)=> async(dispatch)=>{
    try {
        const {data}= await axiosWithAuth().put(":id/editPotluck",id,post)
        
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