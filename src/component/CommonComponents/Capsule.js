import React from 'react'

const Capsule = ({item}) => {
  return (
    <div>
      <div
                  className="flex items-center space-x-2 px-12 py-4 border-2 border-gray-100 rounded-lg bg-white my-4 mx-8 font-bold w-[20rem] justify-center h-18 shadow-xl hover:scale-110 duration-500 text-neutral-700 text-lg cursor-pointer"
                  key={item}
                >
                  <div className="p-3">
                    {item
                      .replace(/_/g, " ")
                      .toLowerCase()
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
    </div>
  )
}

export default Capsule
