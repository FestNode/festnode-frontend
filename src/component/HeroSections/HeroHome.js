import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const HeroHome = () => {

  return (

    
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold animate-pulse">
          We Are Going Live Very Soon
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Stay tuned for something amazing. We're almost there!
        </p>
        <Link to={"/login"}>
        <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow-md hover:bg-gray-100 transition">
          Sign In
        </button>
        </Link>
      </div>
    </div>
  )
}

export default HeroHome
