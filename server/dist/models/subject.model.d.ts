import { Document } from "mongoose";
export interface ISubject extends Document {
    name: string;
    departmentCode: string;
    year: number;
    semester: number;
    subjectCode?: string;
    resourceCount: number;
}
//# sourceMappingURL=subject.model.d.ts.map