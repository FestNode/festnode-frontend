import React from 'react'

const PrimaryButton = ({content}) => {
  return (
    <>
      <h className="bg-gradient-to-b from-purple-600 to-purple-500 text-white px-12 py-4 rounded-2xl text-lg font-medium">
            {content}
          </h>
    </>
  )
}

export default PrimaryButton