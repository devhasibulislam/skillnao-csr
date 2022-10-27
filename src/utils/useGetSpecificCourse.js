import axios from "axios";
import useSWR from "swr";

function useGetSpecificCourse(id) {
  const fetcher = (url, token) =>
    axios
      .get(url, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => res.data);

  const { data, error } = useSWR(
    [
      `https://skillnao-ssr.herokuapp.com/course/${id}`,
      localStorage?.getItem("skillNaoToken"),
    ],
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
