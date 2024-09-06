import ThemeToggle from './ThemeToggle'
import SearchForm from './SearchForm'
import Gallery from './Gallery'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAppContext } from './context'

const queryClient = new QueryClient()

const App = () => {
  const { isDarkTheme } = useAppContext()

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
        {name}
      </main>
    </QueryClientProvider>
  )
}
export default App
