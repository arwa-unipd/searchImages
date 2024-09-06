import { useQueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAppContext } from './context'
const Gallery = () => {
  const { searchTerm } = useAppContext()
  const queryClient = useQueryClient()
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['photos', searchTerm],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`
      )
      return response.data.results
    },
  })
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>Error: {error.message}</h4>
      </section>
    )
  }

  if (data.length === 0) {
    return (
      <section className="image-container">
        <h4>No images were found</h4>
      </section>
    )
  }
  console.log(data)
  return (
    <section className="image-container">
      {data.map((image) => {
        return (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
            className="img"
          />
        )
      })}
    </section>
  )
}

export default Gallery
