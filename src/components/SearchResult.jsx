import React from 'react'

const SearchResult = ({ result, startChat, setIsActive, setShowResult }) => {
  return (
    <div className="w-full h-full flex flex-col space-y-0">
      <div className="ml-2 my-2 font-bold text-[#FFFFFF]">People</div>
      {result.map((result, idx) => (
        <div 
          key={idx} 
          className="hover:bg-gray-100 rounded p-4 h-16 flex items-center cursor-pointer"
          onClick={() => {
            startChat(result)
            setShowResult(false);
            setIsActive(false)
          }}
        >
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="w-10 h-10 mr-4 rounded-full" />
          <div className="flex flex-col">
            <div className="text-sm font-medium">{result.fullName}</div>
            <p className="text-xs text-gray-500">@{result.username}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchResult