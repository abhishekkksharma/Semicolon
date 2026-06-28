import Departments from "../models/departments.model";
import { Request, Response } from "express";

async function handleGetDepartments(
  req: Request,
  res: Response
) {
  try {
    const departments = await Departments.find();
    return res.status(200).json(departments);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch departments",
    });
  }
}

module.exports ={
    handleGetDepartments,
}