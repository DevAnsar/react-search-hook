import { useSearch } from 'react-search-hook'

const topBookNames = [
  'To Kill a Mockingbird',
  '1984',
  'The Great Gatsby',
  'Pride and Prejudice',
  'The Catcher in the Rye',
  "Harry Potter and the Sorcerer's Stone",
  'The Lord of the Rings',
  'The Hobbit',
  'The Bible',
  'The Da Vinci Code',
  'The Hunger Games',
  'The Chronicles of Narnia',
  'The Shining',
  'The Fault in Our Stars',
  'The Alchemist',
]

export const SearchInStringItems = () => {
  const {
    search: booksSearch,
    register: booksRegister,
    searchResult: booksSearchResult,
  } = useSearch('books', { items: topBookNames })
  return (
    <div className='col-span-1 flex flex-col px-8 py-5 border rounded-xl bg-slate-50'>
      <h3 className='text-zinc-800 mb-5 font-normal'>Get search results by sending items to useSearch</h3>
      <div className='grid grid-cols-2 gap-4'>
        <input
          {...booksRegister()}
          placeholder='Enter text...'
          className='w-full px-3 py-1.5 text-sm bg-white border rounded-lg text-slate-800 focus:border-blue-500 outline-none'
        />
      </div>
      <div>
        <div className='flex flex-col text-sm p-1 pt-2 gap-0.5'>
          <div className='flex items-center gap-1 text-slate-500'>
            <span className='font-medium'>Value:</span>
            {booksSearch}
          </div>
          <div className='flex items-center gap-1 text-slate-500'>
            <div className='flex items-start gap-1'>
              <span className='font-medium whitespace-nowrap'>Search Result:</span>
              <ul>
                {booksSearchResult.map((book, i) => (
                  <li key={i}>{book}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
