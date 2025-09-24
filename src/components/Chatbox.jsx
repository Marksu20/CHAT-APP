import React from 'react'
import { useState, useEffect, useMemo, useRef } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { formatTimestamp } from '../utils/formatTimestamp'
import messageData from '../data/messageData'

const Chatbox = () => {
  const [messages, setMessages] = useState([])
  const [messageText, sendMessageText] = useState("")
  const senderEmail = 'catchatuser@test.com';
  const scrollRef = useRef(null);

  useEffect(() => {
    setMessages(messageData)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }, 0)
    }
  }, [messages])

  const sortedMessages = useMemo(() => {
      return [...messages].sort((a, b) => {
        const aTimestamp = a.timestamp.seconds + a.timestamp.nanoseconds / 1e9;
        const bTimestamp = b.timestamp.seconds + b.timestamp.nanoseconds / 1e9;
        return aTimestamp - bTimestamp;
      })
    }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      sender: senderEmail,
      text: messageText,
      timestamp: {
        seconds: Math.floor(Date.now() / 1000),
        nanoseconds: 0
      },
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    sendMessageText("");
  }
  return (
    <section className="flex flex-col flex-1 min-h-0 my-4 mx-2 mr-4 md:m-4 sm:m-4 bg-white rounded-lg shadow-sm">
      {/* flex flex-col flex-1 min-h-0 items-start justify-start mx-3 my-3 w-[100%] bg-white */}
      <header className="w-[100%] h-[82px] shadow-sm m:h-fit p-4 bg-white rounded-t-lg mb-3">
        <main className="flex items-center gap-3">
          <span>
            <img 
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
              alt="Default Avatar Icon"
              className="w-[45px] h-[45px] object-cover rounded-full"
            />
          </span>
          <span>
            <h3 className="font-semibold text=[] text-lg">Cat Chat User</h3>
            <p className="font-light text=[] text-sm">@catchatuser</p>
          </span>
        </main>
      </header>

      <main className="relative w-[100%] flex flex-col flex-1 min-h-0">
        <section className="px-0 flex-1 min-h-0">
          <div ref={scrollRef} className="flex-1 custom-scrollbar overflow-y-auto h-full">
            {/* chats */}
            {sortedMessages?.map((msg, index) => (
              <>
                {msg?.sender === senderEmail ? (
                  // chats from the user
                  <div key={index} className="flex flex-col items-end w-full mb-2">
                    <span className="flex gap-3 max-w-[50%] w-fit h-auto ms-5 mx-3">
                      <div>
                        <div className="flex items-center bg-[#F0F0F0] justify-center px-4 py-3 rounded-lg shadow-sm break-words">
                          <h4 className="break-words whitespace-pre-line text-wrap">{msg.text}</h4>
                        </div>
                        <p className="text-gray-400 text-xs mt-1 text-right">{formatTimestamp(msg?.timestamp)}</p>
                      </div>
                    </span>
                  </div>
                  ) : (
                    // chats from contacts
                    <div key={index} className="flex flex-col items-start w-full mb-2">
                      <span className="flex gap-3 max-w-[50%] w-fit h-auto ms-5">
                        <img 
                          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
                          alt="Default Avatar Icon"
                          className="w-[40px] h-[40px] object-cover rounded-full"
                        />
                        <div>
                          <div className="flex items-center bg-[#F0F0F0] justify-center px-4 py-3 rounded-lg shadow-sm break-words">
                            <h4 className="break-words whitespace-pre-line text-wrap">{msg.text}</h4>
                          </div>
                          <p className="text-gray-400 text-xs mt-1">{formatTimestamp(msg?.timestamp)}</p>
                        </div>
                      </span>
                    </div>
                )}
              </>
              ))
            }
          </div>
        </section>
        
        {/* message input */}
        <div className="outline-1 outline-gray-200 shadow-md rounded-lg mx-2 my-2 shrink-0 p-0 w-[98%]">
          <form onSubmit={handleSendMessage} className="flex items-center bg-white h-[45px] w-[100%] px-2 rounded-lg relative">
            <input 
              type="text" 
              value={messageText}
              placeholder="Write your message..." 
              className="h-full text-[] outline-none text-[16px] pl-3 pr-15 rounded-lg w-[100%]"
              onChange={(e) => sendMessageText(e.target.value)}
            />
            {/* send button */}
            <button type="submit" className="flex items-center justify-center absolute right-3 p-2 rounded-full bg-[#5C5C5C] hover:bg-[#616367] text-white cursor-pointer">
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </main>
    </section>
  )
}

export default Chatbox
