import { useState } from 'react'
import { useAppContext } from './context'
const SearchForm = () => {
  const [category, setCategory] = useState('')
  const { searchTerm, setSearchTerm } = useAppContext()
  const search = (e) => {
    e.preventDefault()
    if (!category) {
      return
    }

    setSearchTerm(e.target.elements.search.value)
    console.log('this is from the form', searchTerm)
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form action="" className="search-form" onSubmit={search}>
        <input
          type="text"
          name="search"
          value={category}
          placeholder="cat"
          className="form-input search-input"
          onChange={(e) => {
            setCategory(e.target.value)
          }}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
