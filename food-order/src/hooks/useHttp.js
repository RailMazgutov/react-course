import { useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config)

    const resData = await response.jaon();

    if (!response.ok) {
        throw new Error(
            resData.message || 'Something went wrong, failed to send request.'
        );
    }

    return resData;
}

export default function useHttp(url, config) {
    const [data, setData] = useState();
    const [isLoadig, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = useCallback(async function () {
        setIsLoading(true);
        try {
            const resData = sendHttpRequest(url, config);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    return {
        data,
        isLoadig,
        error,
        sendRequest
    };
}