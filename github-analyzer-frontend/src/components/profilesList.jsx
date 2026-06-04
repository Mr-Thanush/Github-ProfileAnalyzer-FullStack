import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';



function ProfilesList() {

    
    const {profiles}=useSelector(state=>state.profile);

    

    
    return (
        <div className='max-w-4xl mx-auto mt-10'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Stored Profiles
            </h2>

            {profiles.length===0?(<p className='text-center text-grey-600'>No profiles found.</p>)
            :(
                 profiles.map((profile) => (
                <div className="grid md:grid-cols-2 gap-2" key={profile.github_id}>
                    <h2 className='text-2xl font-bold text-center p-2'>{profile.name}</h2>
                    <p className='text-gray-600 p-2'><span className='font-bold'>Profile UserName :</span> {profile.name}</p>
                    <p className='text-gray-600 p-2'><span className='font-bold'>Profile github_id :</span> {profile.github_id}</p>
                    <p className='text-gray-600 p-2'><span className='font-bold'>Profile Bio :</span> {profile.bio || "N/A"}</p>

                <p className='text-gray-600 p-2' id="followers"><span className='font-bold'>Profile Followers :</span> {profile.followers}</p>
                <p className='text-gray-600 p-2'><span className='font-bold'>Profile Following :</span> {profile.following}</p>

                <p className='text-gray-600 p-2'><span className='font-bold'>Profile public_repos :</span> {profile.public_repos}</p>
                <p className='text-gray-600 p-2'><span className='font-bold'>Profile public_url :</span> {profile.public_url}</p>
                <p className='text-gray-600 p-2'><span className='font-bold'>Profile created_at :</span> {(profile.created_at).slice(0, 10)}</p>
                <p className='text-gray-600 p-2'><span className='font-bold'>Profile account_age_days :</span> {profile.account_age_days}</p>
                <hr/>
            </div>)
        )
            )
        } 

        </div>
    )
}

export default ProfilesList;