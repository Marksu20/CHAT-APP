import React, { useState, useEffect } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { FaXmark } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const SearchModal = ({ setResult, setShowResult, isActive, setIsActive, searchInput, setSearchInput }) => {
  const iconStyle = { color: '#ffffffff' }
  const [input, setInput] = useState("")

  const userData = async (value) => {
    try {
      const query2 = query(collection(db, 'users'), where('fullName', '>=', value), where('fullName', '<=', value + '\uf8ff'));
      const querySnapshot = await getDocs(query2);
      const result = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setResult(result);
    } catch (error) {
      console.log(error);
    }
  }

  // const handleChange = (value) => {
  //   setInput(value)
  //   setShowResult(true)
  //   setIsActive(true)
  //   userData(value)
  // }

  return (
    <>
    <div className="bg-[#3A3B3C] w-[65%] rounded-lg h-[12] p-2 ml-5 flex items-center">
      <FaSearch className="text-[#FFFFFF] cursor-pointer mx-1"/>
      <input 
        type="text" 
        placeholder="Search..."
        value={searchInput} 
        className="bg-transparent border-none outline-none text-md ml-1 placeholder:text-gray-300 text-[#FFFFFF] w-full" 
        onChange={(e) => {
          setSearchInput(e.target.value);
          setShowResult(true);
          setIsActive(true);
          userData(e.target.value);
        }}
        onClick={() => {
          setShowResult(true)
          setIsActive(true)
        }}
      />
    </div>
    {isActive && (  
      <div className="p-2 hover:bg-[#363636] rounded-lg ml-1 cursor-pointer">
        <FaXmark 
          className="text-[#FFFFFF] "
          onClick={() => {
            setSearchInput("")
            setResult([])
            setShowResult(false)
            setIsActive(false)
          }}
        />
      </div>
    )}
    </>
  )
}

export default SearchModal
 