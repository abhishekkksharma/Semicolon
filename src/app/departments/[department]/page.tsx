import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    department: string;
  }>;
};

export default async function Department({ params }: Props) {
  const { department } = await params;

  return <h1>Department ID: {department}</h1>;
}