import express from 'express';
import {analyzeProfile,getAllStoredProfiles,getSingleStoredProfile} from '../Controllers/profileController.js';

const router=express.Router();

router.post('/analyze/profiles',analyzeProfile);
router.post('/profiles',getAllStoredProfiles);
router.post('/stored/profile',getSingleStoredProfile);


export default router;