import express from "express";
import { getDoctorById } from "../controllers/doctors.js";

const router = express.Router();

router.get("/medicos/:id", getDoctorById);

export default router;
