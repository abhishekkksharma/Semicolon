import Link from "next/link";
import { GraduationCap } from "lucide-react";

interface DepartmentCardProps {
  name: string;
  description: string;
  image: string;
  totalSubjects?: number;
  departmentCode: string;
  onView?: () => void;
}

function DepartmentCard({
  name,
  description,
  image,
  totalSubjects = 0,
  departmentCode,
}: DepartmentCardProps) {
  return (
    <div className="group flex h-52 w-full gap-6 rounded-3xl border-2 border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
      {/* Image */}
      <div className="flex items-center justify-center">
        <GraduationCap
          size={56}
          className="text-zinc-700 dark:text-zinc-300 bg-transparent transition-transform duration-300 m-2 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <div>
          <h3 className="line-clamp-1 text-lg font-bold text-zinc-900 dark:text-white">
            {name}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Subjects
            </p>
            <p className="text-lg font-semibold text-zinc-900 dark:text-white">
              {totalSubjects}
            </p>
          </div>

          <Link
            href={`/departments/${departmentCode}`}
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DepartmentCard;
