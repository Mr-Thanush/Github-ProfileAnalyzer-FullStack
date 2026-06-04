import { useState,useEffect } from 'react'
import './App.css'
import AnalyzeForm from './components/analyzeForm.jsx'
import ProfileCard from './components/profileCard.jsx'
import ProfilesList from './components/profilesList.jsx'
import {useDispatch} from 'react-redux';
import {getStoredAllProfiles} from './features/profileSlice.js';



function App() {

  const [showProfilesList,setShowProfilesList]=useState(false);
  const dispatch=useDispatch();

  const handleGetAllProfiles=()=>{
    setShowProfilesList(prev=>{
      if(prev){
      dispatch(getStoredAllProfiles());
      }

      return !prev;
    }
      
    )
  }
     
   
  return (
    <>
  <div className='min-h-screen bg-slate-100 p-6'>
    <h1 className='text-4xl font-bold text-center mb-8'>
      GitHub Analyzer
    </h1>
    <div className='flex justify-center items-center gap-3 '>
      <button 
     onClick={handleGetAllProfiles}
     className='text-purple-600 border-2 p-2 
     rounded-sm w-34'>
      {showProfilesList ? "Hide All Profiles" : "Get All Profiles"}
     </button>
     
     {!showProfilesList && <AnalyzeForm />}
     </div>
     
   {!showProfilesList && <ProfileCard />}

    {showProfilesList && <ProfilesList />}

  </div>
      
    </>
  )
}

export default App;
