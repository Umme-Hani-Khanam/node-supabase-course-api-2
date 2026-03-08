import { supabase } from "../../supabaseClient"; 
//get
export const getCourses = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("courses")
      .select("*");

    if (error) throw error;

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch courses",
      error: err.message
    });
  }
};
//post

export const createEnrollment = async (req, res) => {
  try {
    const { student_name, course_id } = req.body;

    const { data, error } = await supabase
      .from("enrollments")
      .insert([{ student_name, course_id }])
      .select();

    if (error) throw error;

    res.status(201).json({
      message: "Enrollment successful",
      data
    });

  } catch (err) {
    res.status(500).json({
      message: "Enrollment failed",
      error: err.message
    });
  }
};


//get 
export const getEnrollments = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("enrollments")
      .select("*");

    if (error) throw error;

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch enrollments",
      error: err.message
    });
  }
};