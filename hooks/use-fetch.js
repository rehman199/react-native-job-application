import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const options = {
    method: 'GET',
    url: `http://192.168.100.18:8000/${endpoint}`,
    params: { ...query },
  }

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
    } catch (error) {
      setError(error)
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  const refetch = () => fetchData()

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}

export default useFetch
