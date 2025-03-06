import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"


export default function Header() {
  return (
    // logo
    <header className='bg-orange-400 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <i className="fa-solid fa-igloo me-2 text-white"></i>
                <span className='text-white'>REAL</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
            </Link>
            {/* search area */}
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64' />
                <FaSearch className="text-slate-600" />
            </form>
            {/* Home, About , Sign-in SECTION OF NAVIGATION BAR */}
            <ul className="flex gap-4">
              <Link to='/'>
              <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
              </Link>
              <Link to='/about'>
              <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
              </Link>
              <Link to='sign-in'>
              <li className="hidden sm:inline text-slate-700 hover:underline">Sign in</li>
              </Link>
            </ul>
        </div> 
    </header>
  )
}
