import React from 'react'
import { RiChatAiFill, RiFolderUserFill, RiNotificationFill, RiFile4Fill, RiBardFill, RiShutDownLine, RiArrowDownSFill } from 'react-icons/ri'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'

const Navlinks = () => {
  const iconStyle = { color: '#616367' }

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      consoloe.log(error);
    }
  }

  return (
    <section className="sticky flex items-center lg:static lg:items-start lg:justify-start lg:h-[100vh] w-[100%] lg:w-[80px] lg:py-0 h-[7vh] top-2 py-8">{/* outline-1 outline-gray-400 */}
      <main className="flex lg:flex-col items-center lg:gap-10 justify-between lg:px-0 w-[100%]">
        {/* LOGO */}
        <div className="flex items-start justify-center  border-gray-300 lg:w-[100%] p-4 ml-3">
          <span className="flex items-center justify-center cursor-pointer">
            <img 
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
              alt="Cat-Chat"
              className="w-[52px] h-[45px] object-contain bg-white rounded-lg p-2 outline-1 outline-gray-300"
            />
          </span>
        </div>

        <ul className="flex lg:flex-col flex-row items-center gap-7 md:gap-10 px-2 md:px-0">
          <li>
            <button className="lg:text-[25px] text-[20px] cursor-pointer bg-[#E7E7E7] rounded-lg p-3">
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
            <button  
              className="lg:text-[28px] text-[22px] cursor-pointer"
              onClick={handleLogOut}
            >
              <RiShutDownLine style={iconStyle} /> 
            </button>
          </li>
        </ul>
        <button className="block lg:hidden lg:text-[28px] text-[22px] mx-5 cursor-pointer">
          <RiArrowDownSFill /> 
        </button>
      </main>
    </section>
  )
}

export default Navlinks
