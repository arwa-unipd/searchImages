import axios from 'axios'
const customFetch = axios.create({
  baseURL:
    'https://api.unsplash.com/search/photos?client_id=BlJtuFqCPZT5lNOjUCzJVNSp1v7SGCscY2h0nTDMQC4&query=dog',
})

export default customFetch
