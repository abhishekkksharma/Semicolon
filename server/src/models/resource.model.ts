import mongoose, { Schema, Document } from "mongoose";

export interface IResource extends Document {
  title: string;

  type: "notes" | "pyq" | "assignment" | "lab";

  departmentCode: string;

  year: number;

  subjectId: mongoose.Types.ObjectId;

  fileUrl: string;
}