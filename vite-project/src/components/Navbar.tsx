function Navbar(){
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-20 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                    <span className='md:block pr-5 text-white text-2xl font-bold ml-2'>
                    React Jobs
                    </span>
                <div className='md:ml-auto'>
                    <div className='flex space-x-2'>
                        <button className='text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>Home</button>
                        <button className='text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>Jobs</button>
                        <button className='text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>Add Job</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </nav>
    )
}

export default Navbar;