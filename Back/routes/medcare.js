import express from 'express';
import { getDoctorsBySpecialty, getDoctorById, getDoctor, searchDoctors } from '../controllers/doctors.js';

const router = express.Router();

router.get('/doctors/:specialty', getDoctorsBySpecialty);
router.get('/medico/:id', getDoctorById);
router.get('/select', getDoctor);
router.get('/search', searchDoctors);

export default router;
