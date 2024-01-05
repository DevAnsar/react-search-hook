import Header from './components/Heade'
import MultipleInput from './components/MultipleInput'
import { SearchInStringItems } from './components/SearchInItems'

function App() {
  return (
    <div className='w-screen min-h-screen bg-white'>
      <Header />
      <div className='w-full h-full p-9'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10'>
          <MultipleInput />
          <SearchInStringItems />
        </div>
      </div>
    </div>
  )
}

export default App
