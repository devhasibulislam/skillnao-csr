/**
 * Send header to SWR
 * https://stackoverflow.com/questions/65862928/how-to-send-headers-using-swr
 * Pass SWR to useEffect()
 * https://stackoverflow.com/questions/67909721/how-to-pass-data-into-usestate-using-useeffect-next-js-swr-hook-for-fetching
 */

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

function useGetUser() {
  const [user, setUser] = useState({});

  const fetcher = (url, token) =>
    axios
      .get(url, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => res.data);

  const { data, error } = useSWR(
    [
      "https://server.plannao.com/user/me",
      localStorage?.getItem("skillNaoToken"),
    ],
    fetcher
  );

  useEffect(() => {
    setUser(data?.data);
  }, [data?.data]);

  return {
    user: user,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGetUser;
