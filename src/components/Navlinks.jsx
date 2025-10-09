import React from 'react'
import { RiChatAiFill, RiFolderUserFill, RiNotificationFill, RiFile4Fill, RiBardFill, RiShutDownLine, RiArrowDownSFill } from 'react-icons/ri'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'

const Navlinks = () => {
  const iconStyle = { color: '#BEC1C5' }
  const activeIconStyle = { color: '#FFFFFF' }

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      consoloe.log(error);
    }
  }

  return (
    <section className="sticky flex items-center lg:static lg:items-start lg:justify-start lg:h-[100vh] w-[100%] lg:w-[80px] lg:py-0 h-[7vh] top-2 py-8 border-[#262626]">
      <main className="flex lg:flex-col items-center lg:gap-1 justify-between lg:px-0 w-[100%]">
        {/* LOGO */}
        <div className="flex items-start justify-center lg:w-[100%] p-4 mx-3">
          <span className="flex items-center justify-center cursor-pointer">
            <img 
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
              alt="Cat-Chat"
              className="w-[52px] h-[45px] object-contain bg-transparent rounded-lg p-2"
            />
          </span>
        </div>

        <ul className="flex lg:flex-col flex-row items-center gap-2 px-2 md:px-0">
          <li>
            <button className="lg:text-[25px] text-[20px] cursor-pointer bg-[#363636] rounded-lg p-3">
              <RiChatAiFill style={activeIconStyle} /> 
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer hover:bg-[#363636] rounded-lg p-3">
              <RiFolderUserFill style={iconStyle} /> 
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer hover:bg-[#363636] rounded-lg p-3">
              <RiNotificationFill style={iconStyle} /> 
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer hover:bg-[#363636] rounded-lg p-3">
              <RiFile4Fill style={iconStyle} /> 
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px] cursor-pointer hover:bg-[#363636] rounded-lg p-3">
              <RiBardFill style={iconStyle}/> 
            </button>
          </li>
          <li>
            <button  
              className="lg:text-[28px] text-[22px] cursor-pointer hover:bg-[#363636] rounded-lg p-3"
              onClick={handleLogOut}
            >
              <RiShutDownLine style={iconStyle} /> 
            </button>
          </li>
        </ul>
        <button className="block lg:hidden lg:text-[28px] text-[22px] mx-5 cursor-pointer hover:bg-[#363636] rounded-lg p-3">
          <RiArrowDownSFill style={iconStyle}/> 
        </button>
      </main>
    </section>
  )
}

export default Navlinks
