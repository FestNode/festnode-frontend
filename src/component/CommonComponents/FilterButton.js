import React from 'react'

const FilterButton = ({label, icon}) => {
  return (
    <div>
      <div className="text-neutral-600 font-semibold mt-4 text-sm">
        <div className="inline-flex border-2 rounded-full py-2 px-5 space-x-2">
          <div className="text-xs">
            {icon}
          </div>
          <div>{label}</div>
        </div>
      </div>
    </div>
  )
}

export default FilterButton
