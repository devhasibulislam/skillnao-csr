import axios from "axios";
import useSWR from "swr";

function useGetSpecificCourse(id) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `http://localhost:8080/course/${id}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  return {
    course: data?.data,
    isLoading: !error && !data?.data,
    isError: error,
  };
}

export default useGetSpecificCourse;
