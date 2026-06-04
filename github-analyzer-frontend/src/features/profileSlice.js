import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || ''
})

export const analyzeProfile=createAsyncThunk(
    '/profile/analyzeProfile',async(username,rejectWithValue)=>{
        try{
            const responce=await api.post('/github/analyze/profiles',{username})
            return responce.data
        } catch (error) {
            const message = error.response?.data || error.message || 'Failed to Analyze Profile'
            return rejectWithValue(message)
        }
    }
)

export const getStoredAllProfiles=createAsyncThunk(
    '/profile/getStoredAllProfiles',async(rejectWithValue)=>{
        try{
            const responce=await api.post('/github/profiles');
            return responce.data
        } catch (error) {
            const message = error.response?.data || error.message || 'Failed to Get All Stored Profiles'
            return rejectWithValue(message)
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
