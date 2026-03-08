import express from 'express';

import { getCourses } from '../controllers/courseController';
import { getEnrollments } from '../controllers/courseController';
import { createEnrollment } from '../controllers/courseController';
import { validationEnrollment } from '../middleware/validationEnrollment';
const router=express.Router();

router.get("/courses",getCourses);
router.post("/enroll",validationEnrollment,createEnrollment);
router.get("/enrollments",getEnrollments);

export default router;