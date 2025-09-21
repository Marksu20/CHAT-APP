import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { RiMore2Fill } from 'react-icons/ri'
import SearchModal from './SearchModal'
import { formatTimestamp } from '../utils/formatTimestamp'

import chatData from '../data/chats'
const Chatlist = () => {
  const iconStyle = { color: '#ffffffff' }
  
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setChats(chatData);
  }, []);

  const sortedChats = useMemo(() => {
    return [...chats].sort((a, b) => {
      const aTimestamp = a.lastMessageTimeStamp.seconds + a.lastMessageTimeStamp.nanoseconds / 1e9;
      const bTimestamp = b.lastMessageTimeStamp.seconds + b.lastMessageTimeStamp.nanoseconds / 1e9;
      return bTimestamp - aTimestamp; // Sort descending
    })
  }, [chats])


  return (
    <section className="relative hidden lg:flex flex-col item-start justify-start bg-white h-[100vh] w-[100%] md:w-[600px]">
      <header className="flex items-center justify-between w-[100%] lg:border-b border-b-1 border-gray-300 p-4 sticky top-0 md:static z-[100]">
        <main className="flex items-center gap-3">
          <img 
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
            alt="Default Avatar Icon"
            className="w-[44px] h-[44px] object-cover rounded-full outline-1 outline-gray-300"
          />
          <span>
            <h3 className="p-0 font-semibold text-[#000000] md:text-[17px]">{"Cat-chat User"}</h3>
            <p className="p-0 font-light text-[] text-[15px]">@catchat</p>
          </span>
        </main>
        <button className="bg-[#616367] w-[35px] h-[35px] p-2 flex items-center justify-center rounded-lg">
            <RiMore2Fill style={iconStyle} />
          </button>
      </header>

      <div className="w-[100%] mt-[10px] px-5">
        <header className="flex items-center justify-between">
          <h3 className="text-[16px]">Message ({chats?.length || 0})</h3>
          <SearchModal />
        </header>
      </div>

      <main className="flex flex-col itemms-start mt-[1.5rem] pb-3">
          {sortedChats?.map((chat) => (
            <>
              <button 
                key={chat?.uid} 
                className="flex items-start justify-between w-[100%] border-b border-gray-300 px-5 pb-3 pt-3"
              >
                {chat?.users
                  ?.filter((user) => user?.email !== "catchatuser@test.com")
                  ?.map((user) => (
                    <>
                      <div className="flex items-center gap-3">
                        <img 
                          src={user?.image}
                          alt="Cat-Chat Friend Icon"
                          className="w-[40px] h-[40px] object-cover rounded-full outline-1 outline-gray-300"
                        />
                        <span>
                          <h2 className="p-0 font-semibold text-[] text-[17px] text-left">{user?.fullName}</h2>
                          <p className="p-0 font-light text-[] text-[14px] text-left">{chat?.lastMessage}</p>
                        </span>
                      </div>
                      <p className="p-0 font-regular text-[] text-[11px] text-left">{formatTimestamp(chat?.lastMessageTimeStamp)}</p>
                    </>
                ))}
              </button>
            </>
          ))}
      </main>
    </section>
  )
}

export default Chatlist
