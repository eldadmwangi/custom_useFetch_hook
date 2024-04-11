import {useEffect, useState} from "react";

function useFetch(url){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(url) 
    .then(response => response.json()) 
    .then(data => {
      setData(data)
    })
    .catch(error => {
      setError(error)
      console.error('Error Fetching', error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [url]);

  return {
    data,
    loading,
    error
  }
}
export default useFetch

// function useApiGet(url){
//   return useFetch(url)
// }

// export default useApiGet;

