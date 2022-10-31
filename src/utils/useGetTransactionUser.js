import axios from "axios";
import useSWR from "swr";

function useGetTransactionUser(id) {
  const fetcher = (url, token) =>
    axios
      .get(url, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => res.data);

  const { data, error } = useSWR(
    [
      `https://skillnao-ssr.onrender.com/user/transaction/${id}`,
      localStorage?.getItem("skillNaoToken"),
    ],
    fetcher,
    { refreshInterval: 1000 }
  );

  return {
    user: data?.data,
    isLoading: !error && !data?.data,
    isError: error,
  };
}

export default useGetTransactionUser;
