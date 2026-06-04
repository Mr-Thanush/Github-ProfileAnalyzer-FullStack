import { githubApi } from '../services/github_services.js';
import {saveProfileToDB,getAllProfiles,getSingleProfile} from '../Models/profileModel.js';


export const analyzeProfile=async(req,res)=>{
    try {
        const {username} = req.body;

    if(!username){
        return res.status(400).json({
            error: "Username is required"
        })
    }

    const data= await githubApi(username);

    const createdDate=new Date(data.created_at);
    const accountAgeDays=Math.floor(
        (Date.now()-createdDate)/(1000*60*60*24) //it will show Days
    )

    const profile={
        github_id:data.id,
        username:data.login,
        name:data.name,
        bio:data.bio,
        public_repos:data.public_repos,
        followers:data.followers,
        following:data.following,
        public_url:data.html_url,
        created_at:new Date(data.created_at)
        .toISOString()
        .slice(0,19)
        .replace("T"," ")
        ,
        account_age_days:accountAgeDays,
    }

    await saveProfileToDB(profile);

    res.status(200).json({
        success:true,
        profile
    });
}catch(error){
    console.error('analyzeProfile error:', error.message || error, error.stack || 'no stack');
    res.status(500).json({
        success:false,
        error:error.message || 'Internal Server Error'
    });
}
}


export const getAllStoredProfiles=async(req,res)=>{
    try{
        const profiles=await getAllProfiles();
        res.status(200).json({
            success:true,
            profiles
        });
    }catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

export const getSingleStoredProfile=async(req,res)=>{
    try{
        const {username}=req.body;

        if(!username){
            return res.status(400).json({
                success:false,
                error:"Username is required"
            })
        }

        const profile=await getSingleProfile(username);
        res.status(200).json({
            success:true,
            profile
        });
    }catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}