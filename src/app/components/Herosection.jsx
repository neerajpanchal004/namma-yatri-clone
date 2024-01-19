import React from 'react'

const Herosection = () => {
    return (
        <>
            <div className='box-border'>
                {/* section-1 */}
                <div className='p-16 sm:flex '>
                    <div className='sm:w-1/2'>
                        <div className=' text-4xl sm:text-5xl font-bold'>
                            <p>Namma Yatri -</p>
                            <p>2023 Reflection</p>
                        </div>
                        <div className='border-yellow-400 border-4 w-20'></div>
                        <p className='text-xl text-gray-400 py-8'>
                            Namma Yatri has become Bengaluru's most loved auto app, since its formal launch in January 2023.

                        </p>
                        <button className='text-blue-600 p-3 rounded-lg border-2 border-blue-600'>Read  more -</button>

                    </div>
                    <div className='sm:w-1/2'>
                        <img src="/auto-1.svg" />

                    </div>

                </div>
                {/* section-1 */}

                 {/* section-2 */}
                 <div className='p-16 sm:flex'>
                    <div className='sm:w-1/2'>
                        <div className=' text-4xlsm:text-5xl font-bold'>
                            <p>You pay less.</p>
                            <p>Drivers earn more.</p>
                        </div>
                        <div className='border-yellow-400 border-4 w-20'></div>
                        <p className='text-xl text-gray-400 py-8'>
                        Namma Yatri is a Direct-to-Driver app. There is no commission or middle-men. What you pay goes 100% to the Driver and his family!


                        </p>
                        <button className='p-3 rounded-lg bg-yellow-300 my-5'>Download the App</button>

                    </div>
                    <div className='sm:w-1/2'>
                        <img src="/auto-2.png" />

                    </div>

                </div>
                {/* section-2 */}


                
                 {/* section-3 */}
                 <div className='p-16 sm:flex bg-gray-700 '>
                    <div className='sm:w-1/2'>
                        <div className='text-4xl sm:text-5xl font-bold'>
                            <p>Fast, Easy and</p>
                            <p>Safe Rides</p>
                        </div>
                        <div className='border-yellow-400 border-4 w-20'></div>
                        <p className='text-xl text-gray-400 py-8'>
                        Blazingly fast, super-easy app to book rides. Door-step pickups by trusted drivers for your safe ride.



                        </p>
                        <button className='p-3 rounded-lg bg-yellow-300 my-5'>Download the App</button>

                    </div>
                    <div className='sm:w-1/2'>
                        <img src="/auto-3.png" />

                    </div>

                </div>
                {/* section-3 */}


                 {/* section-4 */}
                 <div className='p-16 sm:flex '>
                    <div className='sm:w-1/2'>
                        <div className=' text-4xl sm:text-5xl font-bold'>
                            <p>By the Drivers</p>
                            <p>For the People</p>
                        </div>
                        <div className='border-yellow-400 border-4 w-20'></div>
                        <p className='text-xl text-gray-400 py-8'>
                        A customer friendly app by drivers in collaboration with leading tech companies. Creating a symbiotic community.



                        </p>
                        <button className='p-3 rounded-lg bg-yellow-300 my-5'>Download the App</button>

                    </div>
                    <div className='sm:w-1/2'>
                        <img src="/auto-4.png" />

                    </div>

                </div>
                {/* section-4 */}


                 {/* section-5 */}
                 <div className='p-16 bg-gray-700'>
                    <div className=''>
                        <div className=' text-4xl sm:text-5xl font-bold'>
                            <p>Open, Hi-Tech,</p>
                            <p>Sustainable</p>
                        </div>
                        <div className='border-yellow-400 border-4 w-20'></div>
                        <p className='text-xl text-gray-400 py-8'>
                        100% Open-Source and open data. Built on open mobility platform.

                        </p>
                        <div className='grid sm:grid-cols-3 gap-5 '>
                            {/* one */}
                            <div className='p-5 border-2 border-white rounded-md text-center'>
                                <p className='text-gray-400 text-xl'>Completed Trips</p>
                                <p className='text-3xl font-bold my-3 text-white'>2,34,20,555</p>
                                <p className='font-semibold text-2xl text-green-700'>1,22,989</p>
                            </div>

                             {/* two */}
                             <div className='p-5 border-2 border-white rounded-md text-center'>
                                <p className='text-gray-400 text-xl'>Completed Trips</p>
                                <p className='text-3xl font-bold my-3 text-white'>2,34,20,555</p>
                                <p className='font-semibold text-2xl text-green-700'>1,22,989</p>
                            </div>


                             {/* three */}
                             <div className='p-5 border-2 border-white rounded-md text-center'>
                                <p className='text-gray-400 text-xl'>Completed Trips</p>
                                <p className='text-3xl font-bold my-3 text-white'>2,34,20,555</p>
                                <p className='font-semibold text-2xl text-green-700'>1,22,989</p>
                            </div>
                            
                          
                        </div>

                    </div>
                   

                </div>
                {/* section-5 */}
            </div>
        </>)
}

export default Herosection