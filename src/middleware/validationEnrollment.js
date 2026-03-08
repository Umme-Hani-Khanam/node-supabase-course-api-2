import { supabase } from "../config/supabaseClient.js";
import loggermiddleware from "./loggermiddlware.js";
export const validationEnrollment = async (req, res, next) => {
  try {
    const { student_name, course_id } = req.body;

    // check missing fields
    if (!student_name || !course_id) {
      return res.status(400).json({
        message: "student_name and course_id are required"
      });
    }

    // check if course exists
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", course_id)
      .single();

    if (error || !data) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    next();
  } catch (err) {
    res.status(500).json({
      message: "Validation error",
      error: err.message
    });
  }
};