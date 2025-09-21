import React from 'react'
import { RiChatAiFill, RiFolderUserFill, RiNotificationFill, RiFile4Fill, RiBardFill, RiShutDownLine, RiArrowDownSFill } from 'react-icons/ri'

const Navlinks = () => {
  const iconStyle = { color: '#616367' }

  return (
    <section className="sticky lg:static top-0 flex items-center lg:items-start lg:justify-start h-[7vh] lg:h-[100vh] w-[100%] lg:w-[150px] py-8 lg:py-0 outline-1 outline-gray-400">
      <main className="flex lg:flex-col items-center lg:gap-10 justify-between lg:px-0 w-[100%]">
        <div className="flex items-start justify-center lg:border-b border-gray-300 lg:w-[100%] p-4">
          <span className="flex items-center justify-center cursor-pointer">
            <img 
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
              alt="Cat-Chat"
              className="w-[56px] h-[52px] object-contain bg-white rounded-lg p-2 outline-1 outline-gray-300"
            />
          </span>
        </div>

        <ul className="flex lg:flex-col flex-row items-center gap-7 md:gap-10 px-2 md:px-0">
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer bg-[#E7E7E7] rounded-lg p-3">
              <RiChatAiFill style={iconStyle} /> 
            </button>
          </li>
           <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiFolderUserFill style={iconStyle} /> 
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiNotificationFill style={iconStyle} /> 
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiFile4Fill style={iconStyle} /> 
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiBardFill style={iconStyle}/> 
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiShutDownLine style={iconStyle} /> 
            </button>
          </li>
        </ul>
        <button className="block lg:hidden lg:text-[28px] text-[22px]">
          <RiArrowDownSFill /> 
        </button>
      </main>
    </section>
  )
}

export default Navlinks
