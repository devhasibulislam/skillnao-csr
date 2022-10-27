import axios from "axios";
import useSWR from "swr";

function useGetAllUsers() {
  const fetcher = (url, token) =>
    axios
      .get(url, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => res.data);

  const { data, error } = useSWR(
    ["https://skillnao-ssr.herokuapp.com/user/all", localStorage?.getItem("skillNaoToken")],
    fetcher,
    { refreshInterval: 1000 }
  );

  return {
    users: data?.data,
    isLoading: !error && !data?.data,
    isError: error,
  };
}

export default useGetAllUsers;
