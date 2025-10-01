import React from 'react'

const SearchResult = ({result}) => {
  return (
    <div className="w-full h-full bg-gray-700 flex flex-col mt-1">
      {
        result.map((result, idx) => {
          return (
            <div key={idx}>
              <p className="text-lg mt-1 cursor-pointer hover:bg-[#E7E7E7] py-2">{result.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResult
