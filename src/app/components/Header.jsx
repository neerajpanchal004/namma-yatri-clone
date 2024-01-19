import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <div className='px-16 pt-16 bg-slate-500 box-border'>
                <Navbar />
                <div className='flex flex-wrap mt-10'>
                    <div className='mt-10 sm:mt-20 mr-5'>
                        <p className='sm:text-4xl text-2xl mb-5'>Book an auto with <span className='text-yellow-300'>Zero Commission</span></p>
                        <p>App by the drivers for the people.
                        </p>
                        <p>100% direct payment to drivers.

                        </p>
                        <button className='p-3 rounded-lg bg-yellow-300 my-5'>Download the App</button>
                    </div>
                    <div className='mx-10 w-[300px]'>
                        <img src="/autoDriver.png" />
                    </div>
                </div>
            </div>
        </>)
}

export default Header