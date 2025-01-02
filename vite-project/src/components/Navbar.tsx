import { useState } from 'react';;
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar(){
    const [selected, setSelected] = useState('home')
    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        setSelected((e.target as HTMLAnchorElement).id)
    }
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-20 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                    <span className='md:block pr-5 text-white text-2xl font-bold ml-2'>
                    <FaReact className='inline mb-2 mr-2 text-blue-500 bg-white rounded-full size-8 p-1 ring ring-blue-500 ring-offset-0'/>
                    React Jobs
                    </span>
                <div className='md:ml-auto'>
                    <div className='flex space-x-2'>
                        <Link 
                        id='home' 
                        onClick={handleClick} 
                        to='/' 
                        className={`text-white ${selected === 'home' ? 'bg-black' : 'bg-indigo-700'} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                            Home
                        </Link>
                        <Link 
                        id='jobs' 
                        onClick={handleClick} 
                        to='/jobs' 
                        className={`text-white ${selected === 'jobs' ? 'bg-black' : 'bg-indigo-700'} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                            Jobs
                        </Link>
                        <Link 
                        id='add-job' 
                        onClick={handleClick} 
                        to='/addJob' 
                        className={`text-white ${selected === 'addJob' ? 'bg-black' : 'bg-indigo-700'} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                            Add Job
                        </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </nav>
    )
}

export default Navbar;