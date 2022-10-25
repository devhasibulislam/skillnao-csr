/**
 * Send header to SWR
 * https://stackoverflow.com/questions/65862928/how-to-send-headers-using-swr
 */

import axios from "axios";
import useSWR from "swr";

function useGetUser() {
  const fetcher = (url, token) =>
    axios
      .get(url, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => res.data);

  const { data, error } = useSWR(
    ["http://localhost:8080/user/me", localStorage.getItem("skillNaoToken")],
    fetcher
  );

  return {
    user: data?.data,
    isLoading: !error && !data?.data,
    isError: error,
  };
}

export default useGetUser;
