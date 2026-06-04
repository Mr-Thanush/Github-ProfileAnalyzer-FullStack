
import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {analyzeProfile,removeErrors,removeSuccess} from './../features/profileSlice.js'
import {toast}  from "react-toastify";



const AnalyzeForm=()=>{
    const [username,setUsername]=useState('');
    const {loading,error,success}=useSelector(state=>state.profile);
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!username) return;
        dispatch(analyzeProfile(username));
    }

    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(removeErrors());
        }

        if(success){
            toast.success("Profile Analyzed Successfully");
            dispatch(removeSuccess());
        }

    },[error,success,dispatch])


    
    return(
        <form
        onSubmit={handleSubmit}
        className='flex gap-3 justify-center'
        >
        
            <input
                type="text"
                placeholder="Enter GitHub username"
                className="text-blue-600 border-2 p-2 rounded-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
                type="submit"
                className="text-purple-600 border-2 p-2 rounded-sm" 
            >
                Analyze
            </button>

        </form>
    )

}


export default AnalyzeForm;