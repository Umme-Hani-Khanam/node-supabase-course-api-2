import express from "express";

import { supabase } from "../supabaseClient.js";
import { validateEnrollment } from "../middleware/validationEnrollment.js";
const router = express.Router();


// 1️⃣ GET /courses
router.get("/courses", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("courses")
      .select("*");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 2️⃣ POST /enroll
router.post("/enroll", validateEnrollment, async (req, res) => {
  try {
    const { student_name, course_id } = req.body;

    const { data, error } = await supabase
      .from("enrollments")
      .insert([{ student_name, course_id }]);

    if (error) throw error;

    res.status(201).json({
      message: "Enrollment successful",
      data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 3️⃣ GET /courses/:id/enrollments
router.get("/courses/:id/enrollments", async (req, res) => {
  try {
    const courseId = req.params.id;

    const { data, error } = await supabase
      .from("enrollments")
      .select("student_name, course_id")
      .eq("course_id", courseId);

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;