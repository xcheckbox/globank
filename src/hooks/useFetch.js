import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const fetchData = async () => {

    setState({
      ...state,
      isLoading: true
    })

    try {
      const response = await fetch(url);
      const data = await response.json();

      setState({
        data,
        isLoading: false,
        hasError: null
      })

    } catch (error) {
      setState({
        ...state,
        hasError: true
      })
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}