import React from 'react'

const SearchResult = ({result}) => {
  return (
    <div className="block w-full h-full bg-[#FFFFFF] flex flex-col mt-1">
      <div className="ml-2 font-bold">
        Contacts
      </div>
      {
        result.map((result, idx) => {
          return (
            <div key={idx}>
              <p className="text-lg mt-1 mx-3 cursor-pointer hover:bg-[#E7E7E7] py-2 px-2">{result.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResult
