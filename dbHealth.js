import express from "express";
import { supabase } from "../config/supabaseClient.js";

const router = express.Router();

/*
DB HEALTH CHECK
Checks whether Supabase connection works
*/

router.get("/health", async (req, res) => {
  try {

    // simple query to verify database connectivity
    const { data, error } = await supabase
      .from("courses")
      .select("id")
      .limit(1);

    if (error) {
      throw error;
    }

    return res.status(200).json({
      status: "success",
      message: "Database connection is healthy"
    });

  } catch (err) {

    return res.status(500).json({
      status: "error",
      message: "Database connection failed",
      error: err.message
    });

  }
});

export default router;