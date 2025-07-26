import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const Navbar = ({ setSearchTerm }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Products Gallery</h1>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-1 rounded border outline-none focus:ring dark:bg-gray-700 dark:text-white"
      />

      <DarkModeToggle />
    </div>
  )
}

export default Navbar
