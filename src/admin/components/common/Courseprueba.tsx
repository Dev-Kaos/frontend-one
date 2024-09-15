import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/productsAPI";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { getCourses } from "../../api/coursesAPI";

export default function Courseprueba() {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["getAllcourses"],
    queryFn: getCourses,
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error</div>;

  return (
    <div>
      {data?.map((course: { course: string; id: number }) => {
        return (
          <div key={course.id}>
            {" "}
            {course.id} - {course.course}
          </div>
        );
      })}
    </div>
  );
}
