"use client"
import React,{useState} from 'react'
import Accordian from './Accordian'
import { FaMinus, FaPlus } from "react-icons/fa";



const Accordianui = ({question , answer}) => {
  const [show, setShow] = useState(false)
  return ( 
    <>
        <div className='p-1 sm:px-5 sm:py-2 '>
          <a onClick={()=>setShow(!show)}>
          <div className='flex justify-between items-center px-5 py-3  bg-slate-400'>
          <p className='text-xl'>{question}</p>
          {show? <FaMinus />:<FaPlus />}
          
          </div>
          </a>
          {show && <p className='bg-slate-300 px-5 py-3'>{answer}</p>}

          </div>
        

    </>
  )
}

export default Accordianui