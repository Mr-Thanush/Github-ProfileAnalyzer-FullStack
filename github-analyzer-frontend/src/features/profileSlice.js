import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const analyzeProfile=createAsyncThunk(
    '/profile/analyzeProfile',async(username,rejectWithValue)=>{
        try{
            const responce=await axios.post('/github/analyze/profiles',{username})
            return responce.data
        } catch (error) {
            return rejectWithValue(error.response.data || 'Failed to Analyze Profile')
        }
    }
)

export const getStoredAllProfiles=createAsyncThunk(
    '/profile/getStoredAllProfiles',async(rejectWithValue)=>{
        try{
            const responce=await axios.post('/github/profiles');
            return responce.data
        } catch (error) {
            return rejectWithValue(error.response.data || 'Failed to Get All Stored Profiles')
        }
    }
)


const profileSlice=createSlice({
    name:"profile",
    initialState:{
        currentProfile:null,
        profiles:[],
        loading:false,
        error:null,
        success:null
    },

    reducers:{
        removeErrors:(state)=>{
            state.error=null
        },
        removeSuccess:(state)=>{
            state.success=null
        }
    },


    extraReducers:(builder)=>{
        //Analyze Profile
        builder
        .addCase(analyzeProfile.pending,(state)=>{
            state.loading=true
            state.error=null
            state.success=null
        })
        .addCase(analyzeProfile.fulfilled,(state,action)=>{
            state.loading=false
            state.currentProfile=action.payload
            state.success="Profile analyzed successfully"
        })
        .addCase(analyzeProfile.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })

        //Get All Stored Profiles
        builder
        .addCase(getStoredAllProfiles.pending,(state)=>{
            state.loading=true
            state.error=null
            state.success=null
        })
        .addCase(getStoredAllProfiles.fulfilled,(state,action)=>{
            state.loading=false
            state.profiles=action.payload.profiles
            state.success="All stored profiles fetched successfully"
        })
        .addCase(getStoredAllProfiles.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })

    }

})

export const {removeErrors,removeSuccess}=profileSlice.actions;
export default profileSlice.reducer;
