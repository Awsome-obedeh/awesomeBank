import Image from 'next/image'
import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaWalletSolid } from "react-icons/lia";
import { FaMoneyBill1 } from "react-icons/fa6";
import { BsClipboard2 } from "react-icons/bs";
import { LuCircleDashed } from "react-icons/lu";
import { MdWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";



export default function Asiide() {
  return (
    <>
      <div className="w-full bg-white shadow-md fixed top-0 left-0 right-0 p-2 flex justify-between items-center px-[3.75rem] z-10">
        <h3 className="text-lg uppercase text-md font-bold">Dashboard</h3>

        <div className="border-slate-100 border px-8 py-2 border-gray flex gap-5 items-center rounded-sm">
          <IoIosSearch />
          <p className="text-gray">Search</p>
        </div>

        <div className="w-2 h-2 rounded-full bg-white">
          <IoNotificationsSharp />
        </div>
      </div>


      <div className='h-[100vh] bg-white shadow-md w-11 flex flex-col gap-5 items-center z-20 relative'>
        {/* <Image src="https://plus.unsplash.com/premium_photo-1669870440994-99e3f91ab7d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='logo' width={300} height={200}/> */}

        <div>
          <div className="p-3 text-center transition ease-in-out delay-150 hover:bg-blue-400">
            <RiMenu2Fill />
          </div>
          <div className="p-3 text-center transition ease-in-out delay-150 hover:bg-blue-400">
            <LiaWalletSolid />
          </div>
          <div className="p-3 text-center transition ease-in-out delay-150 hover:bg-blue-400">
            <LiaWalletSolid />
          </div>
          <div className="p-3 text-center transition ease-in-out delay-150 hover:bg-blue-400">
            <FaMoneyBill1 />
          </div>
          <div className="p-3 text-center transition ease-in-out delay-150 hover:bg-blue-400">
            <BsClipboard2 />
          </div>
          <div className="p-3 text-center transition ease-in-out delay-150 hover:bg-blue-400">
            <LuCircleDashed />
          </div>

        </div>

        <div className="flex flex-col justify-center align-center items-center ">
          <div className='border-[1px] border-black rounded-lg  w-[max-content] p-1 text-center mx-auto gap-2'>
            <MdWbSunny />
            <div className="w-2 h-2 rounded-full bg-black mx-auto m-1"></div>
            <IoMoonSharp />
          </div>

        </div>
        <div className='mx-auto'><FaHeadphonesSimple /></div>





      </div>


    </>

  )
}
