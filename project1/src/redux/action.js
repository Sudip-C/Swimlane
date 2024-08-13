import axios from "axios"
import { GET_ALL_DATA, GET_ALL_DATA_FAIL, POST_DATA_FAIL, UPDATE_STATUS_SUCCESS } from "./actionType";

export const getdata =()=> async(dispatch)=>{
try {
    const response=await axios.get('http://localhost:5000/todo');
    
    dispatch({type:GET_ALL_DATA,payload:response.data})
} catch (err) {
    dispatch({type:GET_ALL_DATA_FAIL,payload:err.message})
}
}

export const updtaeData =(id,status)=> async(dispatch)=>{
    try {
       await axios.patch(`http://localhost:5000/todo/${id}`,{status:status});
        
        dispatch({type:UPDATE_STATUS_SUCCESS})
    } catch (err) {
        
    }
    }

export const postData=(post)=> async(dispatch)=>{
    try{
        await axios.post(`http://localhost:5000/todo`,post)
    }catch(err){
        dispatch({type:POST_DATA_FAIL,payload:err.message})
    }
}