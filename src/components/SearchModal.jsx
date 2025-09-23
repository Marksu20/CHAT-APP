import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const SearchModal = () => {
  const iconStyle = { color: '#ffffffff' }

  return (
    <div>
      <button className="bg-[#616367] w-[35px] h-[35px] p-2 flex items-center justify-center rounded-lg cursor-pointer">
        <RiSearchLine style={iconStyle} className="w-[18px] h-[18px]"/>
      </button>
    </div>
  )
}

export default SearchModal
