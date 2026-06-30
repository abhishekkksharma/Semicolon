const Subject = require("../models/subject.model")
import { Request, Response } from "express";

async function handleAddNewSubject(
  req: Request,
  res: Response
) {
  try {
    const {
      name,
      departmentCode,
      year,
      semester,
      subjectCode,
    } = req.body;

    // Required field validation
    if (!name?.trim()) {
      return res.status(400).json({
        message: "Subject name is required",
      });
    }

    if (!departmentCode?.trim()) {
      return res.status(400).json({
        message: "Department code is required",
      });
    }

    if (!year) {
      return res.status(400).json({
        message: "Year is required",
      });
    }

    if (!subjectCode?.trim()) {
      return res.status(400).json({
        message: "Subject code is required",
      });
    }

    if (semester && (semester < 1 || semester > 8)) {
      return res.status(400).json({
        message: "Semester must be between 1 and 8",
      });
    }

    // Check duplicate subject code
    const existingSubject = await Subject.findOne({
      subjectCode: subjectCode.toUpperCase(),
    });

    if (existingSubject) {
      return res.status(409).json({
        message: "Subject with this code already exists",
      });
    }

    const subject = await Subject.create({
      name: name.trim(),
      departmentCode: departmentCode.toUpperCase(),
      year,
      semester,
      subjectCode: subjectCode.toUpperCase(),
    });

    return res.status(201).json({
      message: "Subject created successfully",
      subject,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to create subject",
    });
  }
}

async function handleGetSubjects(
    req: Request<{ departmentCode: string }>,
    res: Response
) {
    try {
        const { departmentCode } = req.params;

        const subjects = await Subject.find({ departmentCode });

        return res.status(200).json({ subjects });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to fetch subjects",
        });
    }
}

module.exports={
    handleAddNewSubject,
    handleGetSubjects
}