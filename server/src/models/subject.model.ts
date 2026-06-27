import mongoose, { Schema, Document } from "mongoose";

export interface ISubject extends Document {
  name: string;

  departmentCode: string;

  year: number;
  semester: number;

  subjectCode?: string;

  resourceCount: number;
}

const subjectSchema = new Schema<ISubject>({
  name: {
    type: String,
    required: true,
  },

  departmentCode: {
    type: String,
    required: true,
    index: true,
  },

  year: {
    type: Number,
    required: true,
    index: true,
  },

  semester: {
    type: Number,
    required: true,
  },

  subjectCode: String,

  resourceCount: {
    type: Number,
    default: 0,
  },
});

