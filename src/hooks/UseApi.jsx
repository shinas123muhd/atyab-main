import { useState, useCallback } from "react";

const useApi = (apiFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const executeApi = useCallback(
    async (config) => {
      const { params } = config;
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const result = await apiFunction(params);
        setData(result);
        return { success: true, data: result };
      } catch (err) {
        console.error(err);
        setError(err.message || "An error occurred");
        return { success: false, error: err.message || "An error occurred" };
      } finally {
        setLoading(false);
      }
    },
    [apiFunction]
  );

  return {
    data,
    loading,
    error,
    executeApi,
  };
};

export default useApi;
