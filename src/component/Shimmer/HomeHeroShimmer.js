import React from 'react'

const HomeHeroShimmer = () => {
  return (
    <div className="animate-pulse">
                <div className="flex justify-between py-4 px-8 items-center shadow-lg mx-[8rem] rounded-xl bg-purple-100 mt-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="h-6 bg-gray-300 w-32 rounded"></div>
                    </div>
                    <div className="flex space-x-8">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="h-4 bg-gray-300 w-20 rounded"></div>
                        ))}
                    </div>
                    <div className="h-8 bg-gray-300 w-24 rounded"></div>
                </div>

                <div className="mx-[8rem] mt-4 h-[400px] bg-gray-300 rounded-lg"></div>
            </div>
  )
}

export default HomeHeroShimmer
