import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { FaXmark } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'

const SearchModal = ({setResult, setShowResult}) => {
  const iconStyle = { color: '#ffffffff' }
  const [input, setInput] = useState("")
  const [isActive, setIsActive] = useState(false)

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  const userData = (value) => {
    axios(API_URL)
      .then(res => {
        const result = res.data.filter(user => {
          return user && user.name && user.name.toLowerCase().includes(value)
        })
        setResult(result)
        console.log(result);
      }).catch(err => console.log(err))
  }

  const handleChange = (value) => {
    setInput(value)
    setShowResult(true)
    setIsActive(true)
    userData(value)
  }

  return (
    <>
    <div className="bg-[#E7E7E7] w-[65%] rounded-lg h-[12] p-2 ml-5 flex items-center">
      <FaSearch className="text-indigo-500 cursor-pointer mx-1" />
      <input 
        type="text" 
        placeholder="Search..." 
        className="bg-transparent border-none outline-none text-md ml-1 placeholder:text-gray-300 text-black w-full" 
        onChange={(e) => handleChange(e.target.value)} 
        onClick={() => {
          setShowResult(true)
          setIsActive(true)
        }}
      />
    </div>
    {isActive && (
      <FaXmark 
        className="cursor-pointer ml-2 text-gray-600 hover:text-black"
        onClick={() => {
          setInput("")
          setResult([])
          setShowResult(false)
          setIsActive(false)
        }}
      />
    )}
    </>
  )
}

export default SearchModal

{/* <div>
  <div>
    <div>
      <div>
        <h3>Search Chat</h3>
        <button>
          <FaXmark />
        </button>
      </div>
      <div>
        <div>
          <div>
            <input type="text" className="border" />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <span>
              <h2>Cat Chat User</h2>
              <p>@catchat</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

// {!setShowResult && (
//         <button
//           onClick={() => {
//             setInput("")
//             setResult([])
//             setShowResult(false)
//           }}
//           className="text-gray-500 mx-1 text-lg hover:text-black"
//         >
//           X
//         </button>
//       )}  