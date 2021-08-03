import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (
    url: string,
    method?: any,
    refreshObject?: any,
    payLoad?
) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res;
                payLoad
                    ? (res = await axios.request({
                          url,
                          method,
                          data: payLoad,
                      }))
                    : (res = await axios.request({ url, method }));
                setResponse(res);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [...refreshObject]);
    return { response, error };
};
