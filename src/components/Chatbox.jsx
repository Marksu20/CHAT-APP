import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'

const Chatbox = () => {
  return (
    <section className="flex flex-col flex-1 min-h-0 my-4 mx-2 mr-4 md:m-4 sm:m-4 bg-white rounded-lg shadow-sm">
      {/* flex flex-col flex-1 min-h-0 items-start justify-start mx-3 my-3 w-[100%] bg-white */}
      <header className="w-[100%] h-[82px] shadow-sm m:h-fit p-4 bg-white rounded-t-lg">
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

      <main className="custom-scrollbar overflow-y-auto relative w-[100%] flex flex-col flex-1 min-h-0">
        <section className="px-2 pt-5 flex-1 min-h-0 overflow-y-auto">
          <div className="flex-1">

            {/* user chats here */}
            <div className="flex flex-col items-end w-full">
              <span className="flex gap-3 max-w-[50%] min-w-[120px] w-fit h-auto ms-10">
                <div>
                  <div className="flex items-center bg-[#F0F0F0] justify-center px-4 py-3 rounded-lg shadow-sm break-words">
                    <h4 className="break-words whitespace-pre-line text-wrap">Cat Chat User Cat Chat User Cat Chat User Cat Chat UserCat Chat User Cat Chat User Cat Chat User Cat Chat User</h4>
                  </div>
                  <p className="text-gray-400 text-xs mt-3 text-right">21st Jul 2025</p>
                </div>
              </span>
            </div>

            {/* contact chats here */}
            <div className="flex flex-col items-start w-full">
              <span className="flex gap-3 max-w-[50%] min-w-[120px] w-fit h-auto ms-5">
                <img 
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
                  alt="Default Avatar Icon"
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
                <div>
                  <div className="flex items-center bg-[#F0F0F0] justify-center px-4 py-3 rounded-lg shadow-sm break-words">
                    <h4 className="break-words whitespace-pre-line text-wrap"> User Cat Chat User Cat Chat User Cat Chat UserCat Chat User Cat Chat User Cat Chat User Cat Chat User</h4>
                  </div>
                  <p className="text-gray-400 text-xs mt-3">21st Jul 2025</p>
                </div>
              </span>
            </div>

          </div>
        </section>
        
        {/* message input */}
        <div className="outline-1 outline-gray-200 shadow-md rounded-lg mx-2 my-2 shrink-0 p-0 w-[99%]">
          <form action="" className="flex items-center bg-white h-[45px] w-[100%] px-2 rounded-lg relative">
            <input 
              type="text" 
              placeholder="Write your message..." 
              className="h-full text-[] outline-none text-[16px] pl-3 pr-15 rounded-lg w-[100%]"
            />
            {/* send button */}
            <button className="flex items-center justify-center absolute right-3 p-2 rounded-full bg-[#5C5C5C] hover:bg-[#616367] text-white">
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </main>
    </section>
  )
}

export default Chatbox
