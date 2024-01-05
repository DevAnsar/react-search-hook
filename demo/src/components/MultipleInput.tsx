import { useSearch } from 'react-search-hook'
import { ChangeEvent } from 'react'

const MultipleInput = () => {
  const { search: booksSearch, setSearch: setBooksSearch, register: booksRegister } = useSearch('books')
  return (
    <div className='col-span-1 flex flex-col px-8 py-5 border rounded-xl bg-slate-50'>
      <h3 className='text-zinc-800 mb-5 font-normal'>
        Simply use multiple inputs to change search text, even if they are in different components
      </h3>
      <div className='grid grid-cols-2 gap-4'>
        <input
          value={booksSearch}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setBooksSearch(e.target.value)}
          placeholder='Enter text...'
          className='w-full px-3 py-1.5 text-sm bg-white border rounded-lg text-slate-800 focus:border-blue-500 outline-none'
        />
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
        </div>
      </div>
    </div>
  )
}

export default MultipleInput
