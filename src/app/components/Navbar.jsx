"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { VscThreeBars } from "react-icons/vsc";


const Navbar = () => {
    const [hemburg, setHemburg] = useState(false)
    function handelhemburg (){
        setHemburg(!hemburg)
    }

    return (
        <>
            <div className='flex justify-between items-center '>
                <div>
                   
                   <img src='/nammaYatrilogo.svg'/>

                </div>
                <div>
                   <button onClick={handelhemburg}><VscThreeBars size={"30px"}/></button>
                </div>
            </div>

           {hemburg? <div className='bg-slate-400 shadow-lg text-white text-xl w-52 mt-5'>
                <p className='hover:text-yellow-400 p-3'>Home</p>
                <p className='hover:text-yellow-400 p-3'>About us</p> 
                <p className='hover:text-yellow-400 p-3'>Open data</p>
                <p className='hover:text-yellow-400 p-3'>Plans</p>
                <p className='hover:text-yellow-400 p-3'>2023 Reflections</p>
            </div>  :
            null

           } 
        </>
    )
}

export default Navbar