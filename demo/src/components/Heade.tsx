import packageJson from '../../package.json'

const Header = () => {
  return (
    <div className='w-full h-14 border-b flex justify-between items-center px-9'>
      <div className='flex items-center gap-3'>
        <h1 className='text-base text-slate-800 font-semibold'>react-search-hook 🔎</h1>
        <span className='text-sm text-slate-400 font-medium'>
          v{packageJson.dependencies['react-search-hook'].replace(/^\^/, '')}
        </span>
      </div>
      <a href='https://github.com/DevAnsar/react-search-hook' className='text-base text-slate-800 hover:text-blue-600'>
        GitHub
      </a>
    </div>
  )
}

export default Header
