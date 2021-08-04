import { useState, useEffect } from "react";
import axios, { Method } from "axios";

interface State<T> {
    status: "init" | "fetching" | "error" | "fetched";
    data?: T;
    error?: string;
}

export const useFetch = <T>(
    url: string,
    method: Method,
    refreshObject: any[] = [],
    payLoad?
): State<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState("init");

    const state: State<T> = {
        status: "init",
        error,
        data,
    };

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
                setData(res.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [...refreshObject]);
    return state;
};
