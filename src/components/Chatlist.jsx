import React, { useState, useEffect, useMemo }  from 'react'
import { RiMore2Fill } from 'react-icons/ri'
import SearchModal from './SearchModal'
import SearchResult from './SearchResult'
import { formatTimestamp } from '../utils/formatTimestamp'
import chatData from '../data/chats'
import { auth, db, listenForChats } from '../firebase/firebase'
import { doc, onSnapshot } from 'firebase/firestore'

const Chatlist = ({ setSelectedUser }) => {
  const iconStyle = { color: '#ffffffff' }
  
  const [chats, setChats] = useState([]);
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDocRef = doc(db, 'users', auth.currentUser?.uid);
    const unsubscribe = onSnapshot(userDocRef, (doc) => {
      setUser(doc.data());
    })
  }, [])

  useEffect(() => {
    const unsubscribe = listenForChats(setChats);

    return () => {
      unsubscribe();
    }
  }, []);

  const sortedChats = useMemo(() => {
    return [...chats].sort((a, b) => {
      const aTimestamp = a?.lastMessageTimeStamp?.seconds + a?.lastMessageTimeStamp?.nanoseconds / 1e9;
      const bTimestamp = b?.lastMessageTimeStamp?.seconds + b?.lastMessageTimeStamp?.nanoseconds / 1e9;
      return bTimestamp - aTimestamp; // Sort descending
    })
  }, [chats]);

  const startChat = (user) => {
    console.log(`Chat started with ${user.fullName}`);
    setShowResult(false);
    setIsActive(false);
    setSearchInput("");
    setSelectedUser(user)  
  };

  return (
    <section className="hidden flex-col lg:flex min-h-0 my-4 ml-2 w-full lg:w-[350px] xl:w-[400px] bg-[white] rounded-lg shadow-sm">
      <header className="flex items-center justify-between h-[70px] shrink-0 p-4">
        {/* lg:border-b border-b-1 border-gray-300 p-4 sticky top-0 md:static z-[100] */}
        <main className="flex items-center gap-3">
          <img 
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
            alt="Default Avatar Icon"
            className="w-[44px] h-[44px] object-cover rounded-full outline-1 outline-gray-300"
          />
          <span>
            <h3 className="p-0 font-semibold text-[#000000] md:text-[17px]">{user?.fullName}</h3>
            <p className="p-0 font-light text-[] text-[15px]">@{user?.username}</p>
          </span>
        </main>

        <button className="bg-[#616367] w-[35px] h-[35px] p-2 flex items-center justify-center rounded-lg cursor-pointer">
          <RiMore2Fill style={iconStyle} />
        </button>
      </header>

      {/* Sub-header */}
      <div className="shrink-0 px-3 py-2 border-b border-gray-200">
        <header className="flex items-center justify-between">
          <h3 className="text-[15px]">Message ({chats?.length || 0})</h3>
          <SearchModal 
            setResult={setResult} 
            setShowResult={setShowResult} 
            isActive={isActive} 
            setIsActive={setIsActive}
            searchInput={searchInput}
            setSearchInput={setSearchInput} 
          />
        </header>
      </div>

      <main className="flex-1 custom-scrollbar overflow-y-auto min-h-0 rounded-lg">
        {showResult ? (
          <SearchResult 
            result={result} 
            startChat={startChat} 
            setShowResult={setShowResult} 
            setIsActive={setIsActive} 
          />
        ) : (
          <>
            {sortedChats?.map((chat) => (
            <>
              <button key={chat?.uid} className="flex items-start justify-between w-full border-b border-gray-300 px-5 pb-3 pt-3 cursor-pointer hover:bg-[#fcfcfc]">
                {chat?.users
                  ?.filter((user) => user?.email !== auth?.currentUser?.email)
                  ?.map((user) => (
                    <>
                      <div className="flex items-center gap-3" onClick={() => startChat(user)} >
                        <img 
                          src={user?.image || "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" }
                          alt="Cat-Chat Friend Icon"
                          className="w-[40px] h-[40px] object-cover rounded-full outline-1 outline-gray-300"
                        />
                        <span>
                          <h2 className="p-0 font-semibold text-[] text-[17px] text-left">{user?.fullName}</h2>
                          <p className="p-0 font-light text-[] text-[14px] text-left">{chat?.lastMessage}</p>
                        </span>
                      </div>
                      <p className="p-0 font-regular text-[] text-[11px] text-right">{formatTimestamp(chat?.lastMessageTimeStamp)}</p>
                    </>
                ))}
              </button>
            </>
            ))}
          </>
        )
        }
        
      </main>

    </section>
  )
}

export default Chatlist
