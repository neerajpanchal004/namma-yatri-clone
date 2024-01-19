import React from 'react'
import Image from 'next/image'
import { VscThreeBars } from "react-icons/vsc";


const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center '>
                <div>
                   
                   <img src='/nammaYatrilogo.svg'/>

                </div>
                <div>
                    <VscThreeBars size={"30px"}/>
                </div>
            </div>
        </>
    )
}

export default Navbar