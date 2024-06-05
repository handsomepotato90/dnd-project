import { useState, useCallback, useRef, useEffect } from "react";


interface HttpClientResponse {
  isLoading: boolean;
  error: string | null;
  sendRequest: (url: string, method?: string, body?: string| null, headers?: {}) => Promise<any>;
  clearError: () => void;
}

export const useHttpClient= ():HttpClientResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  const activeHttpRequest = useRef<AbortController[]>([]); 

  const sendRequest = useCallback(
    async (url:string, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpRequest.current.push(httpAbortCtrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          credentials: "same-origin",
          signal: httpAbortCtrl.signal,
        });
        const resData = await response.json();
        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );
        if (!response.ok) {
          throw new Error(resData.message);
        }
        setIsLoading(false);

        return resData;
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};