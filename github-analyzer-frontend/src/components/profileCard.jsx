import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {analyzeProfile,removeErrors,removeSuccess} from './../features/profileSlice.js';
import {toast} from "react-toastify";

const ProfileCard=()=>{
    const dispatch=useDispatch();
    const {loading,error,success,currentProfile}=useSelector(state=>state.profile);

     useEffect(()=>{
            if(error){
                toast.error(error);
                dispatch(removeErrors());
            }
    
            if(success){
                toast.success("Profile Analyzed Successfully");
                dispatch(removeSuccess());
            }
    
        },[error,success,dispatch]);

        if(loading) {
        return (
        <p className='text-center text-blue-900'>Loading...</p>
        )
    }

    if (!currentProfile) {
  return null;
}


    

    return(
                <div
                    className='bg-blue-100 shadow rounded p-5 
                    max-w-md mx-auto mt-10'
                    >    
                    <h2 className='text-2xl font-bold text-center p-5'>{currentProfile.profile.name}</h2>
            <p className='text-grey-600 p-3'><span className='font-bold'>Profile UserName :</span> {currentProfile.profile.username}</p>
             <p className='text-grey-600 p-3'><span className='font-bold'>Profile github_id :</span> {currentProfile.profile.github_id}</p>
            <p className='text-grey-600 p-3'><span className='font-bold'>Profile Bio :</span> {currentProfile.profile.bio || "N/A"}</p>
            
                <p className='text-grey-600 p-3' id="followers"><span className='font-bold'>Profile Followers :</span> {currentProfile.profile.followers}</p>
                <p className='text-grey-600 p-3'><span className='font-bold'>Profile Following :</span> {currentProfile.profile.following}</p>
            
            <p className='text-grey-600 p-3'><span className='font-bold'>Profile public_repos :</span> {currentProfile.profile.public_repos}</p>
            <p className='text-grey-600 p-3'><span className='font-bold'>Profile public_url :</span> {currentProfile.profile.public_url}</p>
            <p className='text-grey-600 p-3'><span className='font-bold'>Profile created_at :</span> {(currentProfile.profile.created_at).slice(0,10)}</p>
            <p className='text-grey-600 p-3'><span className='font-bold'>Profile account_age_days :</span> {currentProfile.profile.account_age_days}</p>

        </div>
)
}

export default ProfileCard;